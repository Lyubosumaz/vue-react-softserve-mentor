<template>
  <main class="app">
    <header class="site-header">
      <Header />
    </header>
    <section class="site-content">
      <router-view />
    </section>
    <footer class="site-footer">
      <Footer />
    </footer>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Footer from '@/components/Footer/Footer.vue'
import Header from '@/components/Header/Header.vue'

@Options({
  components: {
    Footer,
    Header,
  },
})
export default class App extends Vue {}
</script>

<style scoped lang="scss">
.app {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;

  .header {
    grid-row: 1;
  }

  .content {
    grid-row: 2;
  }

  .footer {
    grid-row: 3;
  }
}
</style>
