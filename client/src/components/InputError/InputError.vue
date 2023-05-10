<template>
  <section
    class="error-messages"
    v-if="errors.length > 0"
  >
    <ul
      v-for="(error, index) in errors"
      :key="index"
    >
      <li><p>{{ error }}</p></li>
    </ul>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    errors: Array,
  },

})
export default class TodoForm extends Vue {
  errors!: string[]

  haveErrors() {
    return this.errors.length > 0
  }
}
</script>

<style scoped lang="scss">
.error-messages {
  margin-top: 0.5em;
  padding-left: 1em;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 0.5em;
  font-weight: 700;
  color: #df3079;
  opacity: 0.9;
}
</style>
