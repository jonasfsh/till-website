import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Photography from '../views/PhotographyView.vue'
import Contact from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/photography',
    name: 'Photography',
    component: Photography
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

