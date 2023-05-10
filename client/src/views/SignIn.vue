<template>
  <div class="user-page">
    <h3 class="user-form-header">Sign In</h3>
    <form
      class="user-form"
      @submit.prevent.stop="login"
    >
      <div class="user-form-field">
        <label for="email" class="input-label">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          class="common-input"
          v-model="email"
        />
      </div>

      <div class="user-form-field">
        <label for="password" class="input-label">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          class="common-input"
          v-model="password"
        />
      </div>

      <div v-if="errors.length">
        {{errors}}
      </div>

      <div class="action-btn">
        <ActionButton type='submit' value='Submit'/>
        <div class="google-login">
          <ActionButton @click="signInWithGoogle" value='Sign In With Google'/>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useRouter } from 'vue-router'
import ActionButton from '@/components/ActionButton/ActionButton.vue'
import { handleFirebaseError } from '@/firebase/errorCodes'
import { auth } from '@/firebase/firebase'

@Options({
  components: {
    ActionButton,
  },
})
export default class SignIn extends Vue {
  router = useRouter()
  email = ''
  password = ''
  errors: string[] = []

  async login() {
    try {
      await signInWithEmailAndPassword(auth, this.email, this.password)
      this.email = ''
      this.password = ''
      this.router.push('/about')
    } catch (err) {
      this.errors.push(handleFirebaseError(err))
    }
  }

  async signInWithGoogle() {
    const provider = new GoogleAuthProvider()
    try {
      await signInWithPopup(auth, provider)
      this.router.push('/about')
    } catch (err) {
      this.errors.push(handleFirebaseError(err))
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/temporarily.scss";
</style>
