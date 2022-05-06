import { createRouter, createWebHistory } from 'vue-router';
import Registration from '../views/Registration.vue';
import SignIn from '../views/SignIn.vue';
import JoinRoom from '../views/JoinRoom.vue';
import CreateRoom from '../views/CreateRoom.vue';
import Home from '../views/Home.vue';
import PickMovie from '../views/PickMovie';
import MovieRatings from '../views/MovieRatings';


import { store } from '../store.js';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Registration
  },
  {
    path: '/sign_in',
    name: 'Sign In',
    component: SignIn,
    beforeEnter: () => {
      console.log(store.loggedIn);
      if (store.loggedIn) return false;
    }
  },
  {
    path: '/join_room',
    name: 'Join Room',
    component: JoinRoom,
  },
  {
    path: '/create_room',
    name: 'Create Room',
    component: CreateRoom,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/pick_movie',
    name: 'Pick Movie',
    component: PickMovie,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/movie_ratings',
    name: 'Movie Ratings',
    component: MovieRatings,
    meta: {
      requiresAuth: true
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
});

export default router;