<template>
  <div class="about">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld/HelloWorld.vue' // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class AboutView extends Vue {}
</script>

<style scoped lang="scss">
.about {
  padding: 4em 0;
  text-align: center;
  color: #fff;
}
</style>
