import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/sofas',
    name: 'sofas',
    component: HomeView
  },
  {
    path: '/armchairs',
    name: 'armchairs',
    component: HomeView
  },
  {
    path: '/chairs',
    name: 'chairs',
    component: HomeView
  },
  {
    path: '/beds',
    name: 'beds',
    component: HomeView
  },
  {
    path: '/mattresses',
    name: 'mattresses',
    component: HomeView
  },
  {
    path: '/puffs',
    name: 'puffs',
    component: HomeView
  },
  {
    path: '/exclusive-furniture',
    name: 'exclusive-furniture',
    component: HomeView
  },
  {
    path: '/2d-3d-models',
    name: '2d-3d-models',
    component: HomeView
  },
  {
    path: '/ru',
    name: 'russian',
    component: HomeView
  },
  {
    path: '/ua',
    name: 'ukrainian',
    component: HomeView
  },
  {
    path: '/en',
    name: 'english',
    component: HomeView
  },
]

const router = new VueRouter({
  routes
})

export default router
