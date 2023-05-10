<template>
  <input
    class="common-input"
    ref="input"
    :id="id"
    :name="name"
    :type="type"
    :readOnly="readOnly"
    :disabled="readOnly"
    :required="required"
    aria-label="common-input"
  />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    id: String,
    name: String,
    value: [String, Boolean],
    type: {
      type: String,
      default: 'text',
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    'callback-value': Function,
  },
})
export default class CommonInput extends Vue {
  value!: string | boolean;
  type!: string

  mounted() {
    const inputRef = this.$refs.input as HTMLInputElement
    if (inputRef) {
      const sValue = this.value ? this.value.toString() : ''
      inputRef.value = sValue
    }
  }
}
</script>

<style scoped lang="scss">
.common-input {
  width: 100%;
  margin-top: 0.5em;
  padding: 0.5em 1em;
  border: 0.1em solid transparent;
  border-radius: 0.5em;
  background: rgba(255, 255, 255, 0.4) none repeat scroll 0 0;
  color: #424242;
  opacity: 0.9;

  &:active,
  &:focus,
  &:hover,
  &:focus-visible {
    border: 0.1em solid rgba(255, 255, 255, 0.2);
    outline: transparent;
    opacity: 1;
  }

  &::placeholder{
    color: #fff;
  }
}
</style>
