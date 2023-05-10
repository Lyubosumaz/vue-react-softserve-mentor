<template>
  <div class="input-group-checkbox">
    <input
      class="common-input-checkbox"
      ref="input"
      :id="id"
      :name="name"
      type="checkbox"
      :readOnly="readOnly"
      :disabled="readOnly"
      :required="required"
      aria-label="common-input-checkbox"
      @change="handleCheckboxChange"
    />
    <label :id="id">{{label}}</label>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    id: String,
    name: String,
    label: String,
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
  },
})
export default class CheckboxInput extends Vue {
  value!: string | boolean;
  type!: string

  mounted() {
    const inputRef = this.$refs.input as HTMLInputElement
    if (inputRef) {
      const sValue = this.value ? this.value.toString() : ''
      inputRef.checked = sValue === 'true'
      inputRef.value = sValue === 'true' ? 'true' : 'false'
    }
  }

  handleCheckboxChange() {
    const inputRef = this.$refs.input as HTMLInputElement
    inputRef.value = JSON.stringify(!JSON.parse(inputRef.value))
  }
}
</script>

<style scoped lang="scss">
.common-input-checkbox {
  width: 1.6em;
  height: 1.6em;
  margin-right: 0.75em;
  display: grid;
  place-content: center;
  appearance: none;
  background: rgba(255, 255, 255, 0.4) none repeat scroll 0 0;
  border-radius: 0.2em;
  opacity: 0.9;

  &:checked::before {
    transform: scale(1);
  }

  &::before {
    content: "";
    width: 1.1em;
    height: 1.1em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 2em 2em #03e9f4;
    border-radius: 0.2em;
  }

  &:active,
  &:focus,
  &:hover,
  &:focus-visible {
    border: 0.1em solid rgba(255, 255, 255, 0.2);
    outline: transparent;
    opacity: 1;
  }
}
</style>
