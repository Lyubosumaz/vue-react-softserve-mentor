import { createApp } from 'vue'
import Observer from 'mobx-vue-lite'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App)
  .use(store)
  .use(router)
  .use(Observer)
  .mount('#app')
