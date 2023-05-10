<template>
  <div class="home">
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
  <div :class="activeTab ===  0 ? 'todos-content' : 'tab-content'">
    <div v-if="Array.isArray(tabs[activeTab].component)">
      <component
        v-for="(component, component_index) in tabs[activeTab].component"
        :is="component" :key="component_index"
      />
    </div>
    <component
      v-else
      :is="tabs[activeTab].component"
      v-bind="tabs[activeTab].props"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import TodosForm from '@/components/TodosForm/TodosForm.vue'
import TodosList from '@/components/TodosList/TodosList.vue'
import ClientTwo from '@/components/ClientTwo.vue'

@Options({
  components: {
    TodosForm,
    TodosList,
    ClientTwo,
  },
})
export default class Tabs extends Vue {
  activeTab = 0

  get tabs() {
    return [
      {
        title: 'Todos',
        component: [TodosForm, TodosList],
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
$gradient-background: linear-gradient(
  15deg, rgba(33,33,33,1) 0%, rgba(79,102,171,1) 50%, rgba(3,233,244,1) 100%);

.home {
  display: flex;
  justify-content: center;
  color: #ddd;

  .tab {
    margin: 1em;
    border-bottom: .2em solid transparent;
    background-color: transparent;
    cursor: pointer;

    &.active {
      border-color: #fff;
    }
  }
  .tab + .tab {
    margin-left: 1.5em;
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

.todos-content {
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
    background: $gradient-background;
    z-index: -1;
  }
}

.tab-content {
  width: 32em;
  height: 20em;
  padding: 1em;
  margin: 3em auto;
  background: $gradient-background;
}
</style>
