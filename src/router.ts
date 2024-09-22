import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./components/Home.vue')
  },
  {
    path: '/about',
    name: 'AboutUs',
    component:() => import('./components/AboutUs.vue')
  },
  {
    path: '/contact',
    name: 'ContactUs',
    component: () => import('./components/ContactUs.vue')
  },
  {
    path: '/team',
    name: 'OurTeam',
    component: import('./components/OurTeam.vue')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: import('./components/Portfolio.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(),  
  routes
})

export default router
