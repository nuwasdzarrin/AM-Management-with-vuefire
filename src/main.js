import Vue from 'vue'
import { rtdbPlugin } from 'vuefire'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'

import navbar from './layouts/Navbar'
import bottomnav from './layouts/BottomNav'

import Home from './components/Home.vue'
import AddEvent from './components/AddEvent.vue'
import Chat from './components/Chat.vue'

Vue.use(rtdbPlugin)
Vue.use(VueRouter)
Vue.use(Vuetify)

Vue.component('app-header',navbar)
Vue.component('app-bottomnavbar',bottomnav)

Vue.config.productionTip = false

const routes = [
  {
        name: 'Add',
        path: '/add',
        component: AddEvent
  },
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'Chat',
    path: '/chat',
    component: Chat
  }
];

const router = new VueRouter({ mode: 'history', routes: routes });

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
