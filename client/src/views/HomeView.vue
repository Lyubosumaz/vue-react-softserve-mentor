<template>
  <div class="home">
    <Tabs/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Tabs from '@/components/Tabs.vue'

@Options({
  components: {
    Tabs,
  },
})
export default class HomeView extends Vue {}
</script>
