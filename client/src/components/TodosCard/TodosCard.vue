<template>
  <p :class="todo.done ? ['todos-content', 'complected']: 'todos-content'">
    {{ todo.content }}
  </p>
  <div :class="todo.done ? ['todos-actions', ['with-delete-btn']] : 'todos-actions'">
    <ActionButton
      :class="todo.done ? 'hide' : 'normal'"
      type='submit'
      value='Complete'
      @click="completeTodo(todo.id)"
      animation
    />
    <ActionButton value='Delete' @click="deleteTodo(todo.id)"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Observer } from 'mobx-vue-lite'
import ActionButton from '@/components/ActionButton/ActionButton.vue'
import InputLabel from '@/components/InputLabel/InputLabel.vue'
import { useTodosStore, TodosStore } from '@/infrastructure/store/Todos.store'

@Options({
  emits: ['complete-todo', 'delete-todo'],
  components: {
    Observer,
    InputLabel,
    ActionButton,
  },
})
export default class TodosCard extends Vue {
  todos: TodosStore = useTodosStore()

  mounted() {
    this.todos.getTodos()
  }

  deleteTodo(todoId: string) {
    this.todos.deleteTodo(todoId)
  }

  completeTodo(todoId: string) {
    this.todos.completeTodo(todoId)
  }
}
</script>

<style scoped lang="scss">
.todos-card {
  margin: 0 1.75em;
  padding: 1.8em 1.25em;
  border-top: 0.1em solid #03e9f4;

  .todos-content {
    color: #fff;
    margin-bottom: 1em;
    margin-left: 0.75em;

    &.complected {
      text-decoration: line-through;
      opacity: 0.5;
    }
  }

  .todos-actions {
    font-size: 0.75rem;
    display: flex;
    justify-content: space-between;

    .hide {
      display: none;
    }

    &.with-delete-btn {
      justify-content: flex-end;
    }
  }
}
</style>
