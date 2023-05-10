<template>
  <nav class="header">
    <ul class="left-nav-actions">
      <li class="nav-btn"><router-link to="/">Home</router-link></li>
      <li class="nav-btn"><router-link to="/about">About Vue</router-link></li>
    </ul>
    <ul class="right-nav-actions">
      <li class="nav-btn" v-if="!isSignIn">
        <router-link to="/user/sign-up">Sign Up</router-link>
      </li>
      <li class="nav-btn" v-if="!isSignIn">
        <router-link to="/user/sign-in">Sign In</router-link>
      </li>
      <li class="nav-btn" v-if="isSignIn">
        <button @click="handleSignOut">Sign Out</button>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { auth } from '@/firebase/firebase'

@Options({})
export default class Header extends Vue {
 router = useRouter()
  isSignIn = false

  mounted() {
    onAuthStateChanged(auth, (user) => {
      this.isSignIn = !!user
    })
  }

  async handleSignOut() {
    await signOut(auth)
    this.router.push('/')
  }
}
</script>

<style lang="scss">
.header {
  height: 2.5em;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.1em solid #4f66ab;

  .left-nav-actions,
  .right-nav-actions {
    display: flex;

    .nav-btn {
      margin: 0 0.35em;
      display: flex;
    }
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: #4f66ab;
    text-decoration: none;

    &.router-link-exact-active {
      color: #03e9f4;
    }
  }

  button {
    font-size: inherit;
    border: none;
    outline: none;
    font-weight: bold;
    color: #03e9f4;
    background: transparent;
  }
}
</style>
