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
import TodoView from '@/components/TodoView.vue'
import ClientTwo from '@/components/ClientTwo.vue'

@Options({
  components: {
    TodoView,
    ClientTwo,
  },
})
export default class Tabs extends Vue {
  activeTab = 0

  get tabs() {
    return [
      {
        title: 'Todos',
        component: TodoView,
      },
      {
        title: 'React Graph',
        component: ClientTwo,
        props: {
          iframeRoute: 'http://localhost:9000/',
        },
      },
      {
        title: 'React About',
        component: ClientTwo,
        props: {
          iframeRoute: 'http://localhost:9000/about',
        },
      },
    ]
  }
}
</script>

<style scoped lang="scss">
.tab-nav {
  display: flex;
  justify-content: center;
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
  max-width: 30em;
  padding-bottom: 1.75em;
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
}
</style>
