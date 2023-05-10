<template>
  <div :class="`input-group${isFieldId(id) ? '-id': ''}`">
    <template v-if="isFieldId(id)">
      <input
        key="id"
        name="id"
        type="hidden"
        :value="value"
      />
    </template>
    <template v-else-if="type === 'multiple-field'">
      <InputLabel :id="id" :label="id"/>
      <div
        class="input-label-multiple"
        v-for="field in value"
        :key="field.name"
      >
        <CommonInput
          :id="field.name"
          :name="field?.options?.persistName? field.name : id"
          :placeholder="titleFromName(field.name)"
          :value="field.value"
          :type="type"
          :readOnly="readOnly"
          :required="required"
        />
      </div>
    </template>
    <template v-else>
      <template v-if="type === 'checkbox'">
        <CheckboxInput
          :id="id"
          :name="id"
          :label="label"
          :value="value"
          :readOnly="readOnly"
          :required="required"
        />
      </template>
      <template v-else >
        <InputLabel :id="id" :label="label"/>
        <CommonInput
          :id="id"
          :name="id"
          :value="value"
          :type="type"
          :readOnly="readOnly"
          :required="required"
        />
      </template>
    </template>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import CheckboxInput from '@/components/CheckboxInput/CheckboxInput.vue'
import CommonInput from '@/components/CommonInput/CommonInput.vue'
import InputLabel from '@/components/InputLabel/InputLabel.vue'
import { titleFromName } from '@/global/strings'

@Options({
  props: {
    label: [String, Array],
    value: [String, Number, Boolean, Array],
    id: String,
    type: String,
    readOnly: Boolean,
    required: Boolean,
  },
  components: {
    CommonInput,
    CheckboxInput,
    InputLabel,
  },
  methods: {
    titleFromName,
  },
})
export default class InputGroup extends Vue {
  isFieldId(id: string) {
    return id === 'id'
  }
}
</script>

<style scoped lang="scss">
.input-group {
  caret-color: #212121;
  & + & {
    margin-top: 1em;
  }
}

.input-group-checkbox {
  display: flex;
  color: #ffffff;
}
</style>
