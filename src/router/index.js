import Vue from 'vue'
import VueRouter from 'vue-router'
import Master from '../views/Master.vue'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'master',
    component: Master,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: Home,
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/About.vue'),
      },
      {
        path: 'projects',
        name: 'projects',
        component: () => import('../views/Projects.vue'),
      },
      {
        path: 'projects/:id',
        name: 'project',
        component: () => import('../views/Project.vue'),
      },
    ],
  },
  { path: '*', name: 'not-found', component: NotFound },
]

const router = new VueRouter({
  routes,
})

export default router
