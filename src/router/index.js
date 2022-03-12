import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue';
import Registration from '../views/Registration.vue';
import SignIn from '../views/SignIn.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: App
  },
  {
    path: '/register',
    name: 'Register',
    component: Registration
  },
  {
    path: '/sign_in',
    name: 'Sign In',
    component: SignIn
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
});

export default router;