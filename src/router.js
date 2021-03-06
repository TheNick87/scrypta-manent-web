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
      component: () => import('./views/Archive.vue')
    },
    {
      path: '/send',
      name: 'send',
      component: () => import('./views/Send.vue')
    },
    {
      path: '/sign',
      name: 'sign',
      component: () => import('./views/Sign.vue')
    },
    {
      path: '/data-explorer',
      name: 'data-explorer',
      component: () => import('./views/DataExplorer.vue')
    },
    {
      path: '/token',
      name: 'token',
      component: () => import('./views/Token.vue')
    },
    {
      path: '/sidechain/:sidechain',
      name: 'sidechain',
      component: () => import('./views/TokenTransactions.vue')
    }
  ]
})
