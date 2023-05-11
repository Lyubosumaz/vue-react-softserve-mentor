<template>
  <div class="tab-nav">
    <div
      class="tab"
      v-for="(tab, index) in tabs"
      :key="index"
      :class="{ 'active': index === activeTab }"
      @click="activeTab = index"
      @keyup.enter="activeTab = index"
    >
      {{ tab.title }}
    </div>
  </div>
  <div class="tab-content">
    <component
      :is="tabs[activeTab].component"
      v-bind="tabs[activeTab].props"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { SignInStore, useSignInStore } from '@/infrastructure/store/SignIn.store'
import { SignUpStore, useSignUpStore } from '@/infrastructure/store/SignUp.store'
import MainForm from '@/components/MainForm.vue'

@Options({
  components: {
    MainForm,
  },
})
export default class Tabs extends Vue {
  SignInStore: SignInStore = useSignInStore()
  SignUpStore: SignUpStore = useSignUpStore()
  activeTab = 0

  async mounted() {
    await this.SignInStore.getSignIn()
    await this.SignUpStore.getSignUp()
  }

  get tabs() {
    return [
      {
        title: 'Sign In',
        component: 'MainForm',
        props: {
          formHeader: 'Sign In',
          entity: this.SignInStore.viewModels,
          onSubmitClicked: this.handleSignInSubmit,
        },
      },
      {
        title: 'Sign Up',
        component: 'MainForm',
        props: {
          formHeader: 'Sign Up',
          entity: this.SignUpStore.viewModels,
          onSubmitClicked: this.handleSignUpSubmit,
        },
      },
    ]
  }

  async handleSubmit(endpoint: string, formData: unknown) {
    const response = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (response.ok) {
      const res = await response.json()
      console.log(res) // TODO: notification
    }
  }

  async handleSignInSubmit(formData: unknown) {
    await this.handleSubmit('http://localhost:4011/user/sign-in', formData)
  }

  async handleSignUpSubmit(formData: unknown) {
    await this.handleSubmit('http://localhost:4011/user/sign-up', formData)
  }
}
</script>

<style scoped lang="scss">
.tab-nav {
  display: flex;
  color: #ddd;

  .tab {
    background-color: transparent;
  }
}

.tab-nav > div {
  padding: 10px;
  cursor: pointer;
}

.tab-nav > .active {
  color: #111;
  background-color: #ddd;
}

.tab-content {
  margin-top: 10px;
}
</style>
