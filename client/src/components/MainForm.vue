<template>
  <section class="main-form">
    <h3 class="main-form-header">{{formHeader}}</h3>
    <form class="user-form" @submit.prevent.stop="handleSubmit">
      <InputGroup
        v-for="[entityKey, entityValue] in Object.entries(entity)"
        :key="entityKey"
        :label="titleFromName(entityKey)"
        :value="entityValue"
        :id="entityKey"
        :type="inputLabelType(entityValue)"
      />
      <div class="actions-group">
        <!-- TODO: add reset ability -->
        <ActionButton type='reset' value='Reset'/>
        <ActionButton type='submit' value='Submit'/>
      </div>
      <section class="user-utility-navigation">
        <!-- TODO: add correct links -->
        <router-link
          v-if="formHeader === 'Sign Up'"
          class="nav-link"
          to="/about"
        >
          Already have an account? <strong>Sign in</strong>
        </router-link>
        <router-link
          v-else
          class="nav-link"
          to="/about"
        >
          Forgot Password?
        </router-link>
      </section>
    </form>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import CommonInput from '@/components/CommonInput.vue'
import ActionButton from '@/components/ActionButton.vue'
import InputGroup from '@/components/InputGroup.vue'
import { isEmptyString, titleFromName } from '@/global/strings'

@Options({
  props: {
    formHeader: String,
    entity: Object,
  },
  components: {
    CommonInput,
    InputGroup,
    ActionButton,
  },
  methods: {
    titleFromName,
  },
})
export default class MainForm extends Vue {
  inputLabelType = (value: string | string[] | boolean) => {
    if (Array.isArray(value)) {
      return 'multiple-field'
    }

    switch (typeof value) {
      case 'boolean':
        return 'checkbox'
      default:
        return 'text'
    }
  }

  handleSubmit(event: Event) {
    const form = event?.target
    if (form === null) return

    const newEntity = Object.values(form).reduce((obj, field) => {
      if (!isEmptyString(field?.name)) {
        if (obj.hasOwnProperty(field?.name)) {
          console.log(obj[field?.name] === field?.value) // TODO: field validation
        }
        return { ...obj, [field?.name]: field?.value }
      }
      return obj
    }, {})

    this.$emit('submit-clicked', newEntity)
  }
}
</script>

<style scoped lang="scss">
.main-form {
  max-width: 30em;
  margin: 3em auto;
  box-shadow: 0 0.2em 3em rgba(0, 0, 0, 0.8);
  background-color: #000;
  background-position: center bottom;
  background-size: cover;
  position: relative;
  z-index: 1;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(
      15deg, rgba(33,33,33,1) 0%, rgba(79,102,171,1) 50%, rgba(3,233,244,1) 100%);
    z-index: -1;
  }

  .main-form-header {
    padding-top: 1em;
    color: #fff;
    text-align: center;
  }

  .user-form {
    padding: 2.2em 3em;

    .actions-group {
      margin-top: 2em;
      display: flex;
      justify-content: space-between;
    }
  }

  .user-utility-navigation {
    margin-top: 4em;
    padding-top: 2em;
    border-top: 0.1em solid #4f66ab;
    text-align: center;

    .nav-link {
      text-decoration: none;
      color: #fff;
      opacity: 0.8;

      &:hover {
        text-decoration: underline;
        opacity: 1;
      }
    }
  }
}
</style>
