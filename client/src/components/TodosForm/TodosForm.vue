<template>
  <section class="todos-form-wrapper">
    <h3 class="todos-form-header">Add Todos</h3>
    <form class="todos-form" @submit.prevent.stop="handleSubmit">
      <section class="add-todo">
        <InputLabel :label="'content'"/>
        <CommonInput :name="'name'" :onSubmitClicked="handleSubmit"/>
        <InputError :errors="errors"/>
      </section>
      <section class="actions-group">
        <ActionButton type='submit' value='Add'/>
      </section>
    </form>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import ActionButton from '@/components/ActionButton/ActionButton.vue'
import CommonInput from '@/components/CommonInput/CommonInput.vue'
import InputError from '@/components/InputError/InputError.vue'
import InputLabel from '@/components/InputLabel/InputLabel.vue'
import { useTodosStore, TodosStore } from '@/infrastructure/store/Todos.store'
import { ERRORS } from '@/global/constants'

@Options({
  components: {
    InputLabel,
    CommonInput,
    InputError,
    ActionButton,
  },
})
export default class TodoForm extends Vue {
  todos: TodosStore = useTodosStore()
  errors: string[] = []

  handleSubmit(event: Event) {
    const form = event?.target
    if (form === null) return
    Object.values(form).forEach((input: HTMLInputElement) => {
      if (!input.name) return
      this.errorNewTodo(input)
      this.addNewTodo(input)
    })
  }

  addNewTodo(input: HTMLInputElement) {
    if (!input.value) return
    this.todos.addTodo(input.value)
    input.value = ''
  }

  errorNewTodo(input: HTMLInputElement) {
    if (!input.value) {
      if (!this.errors.includes(ERRORS.EMPTY_CONTENT)) this.errors.push(ERRORS.EMPTY_CONTENT)
    } else if (this.errors.includes(ERRORS.EMPTY_CONTENT)) {
      this.errors.splice(this.errors.indexOf(ERRORS.EMPTY_CONTENT), 1)
    }
  }
}
</script>

<style scoped lang="scss">
.todos-form-header {
  padding-top: 1em;
  color: #fff;
  text-align: center;
}

.todos-form {
  padding: 2.2em 3em;
  display: flex;
}
.add-todo {
  flex-grow: 1;
}

.actions-group {
  padding: 2.2em 0 0 0.5em;
}
</style>
