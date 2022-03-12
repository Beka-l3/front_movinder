import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue';
import Registration from '../views/Registration.vue';
import SignIn from '../views/SignIn.vue';
import JoinRoom from '../views/JoinRoom.vue';
import CreateRoom from '../views/CreateRoom.vue';

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
  },
  {
    path: '/join_room',
    name: 'Join Room',
    component: JoinRoom
  },
  {
    path: '/create_room',
    name: 'Create Room',
    component: CreateRoom
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
});

export default router;