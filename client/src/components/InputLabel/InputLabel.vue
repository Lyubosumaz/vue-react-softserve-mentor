<template>
  <label label class="input-label" :for="id">{{label}}</label>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    id: String,
    label: [String, Array],
  },
})
export default class InputLabel extends Vue {}
</script>

<style scoped lang="scss">
.input-label {
  width: 100%;
  padding-left: 1em;
  border-left: 0.1em solid transparent;
  text-transform: uppercase;
  color: #ffffff;
}
</style>
