import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/upload',
      name: 'upload',
      component: () => import('./views/Upload.vue')
    },
    {
      path: '/archive',
      name: 'archive',
      component: () => import('./views/Archive-2.vue')
    },
    {
      path: '/send',
      name: 'send',
      component: () => import('./views/Send.vue')
    }
  ]
})
