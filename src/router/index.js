//@ts-nocheck
import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../views/Home.vue';
import Register from '../views/Register.vue';

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
