import Observer from 'mobx-vue-lite'
import { createApp } from 'vue'
import App from './app/App.vue'
import router from './router/router'

createApp(App)
  .use(Observer)
  .use(router)
  .mount('#app')
