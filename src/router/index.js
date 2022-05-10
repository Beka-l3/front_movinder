import { createRouter, createWebHistory } from 'vue-router';
import Registration from '../views/Registration.vue';
import SignIn from '../views/SignIn.vue';
import JoinRoom from '../views/JoinRoom.vue';
import CreateRoom from '../views/CreateRoom.vue';
import Home from '../views/Home.vue';
import PickMovie from '../views/PickMovie';
import MovieRatings from '../views/MovieRatings';
import WaitingRoom from '../views/WaitingRoom';


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
  },
  {
    path: '/waiting_room',
    name: 'Waiting Room',
    component: WaitingRoom,
    meta: {
      requiresAuth: true
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
});

router.beforeEach(async (to) => {
  let authorized = store.state.authorized;
  if (!authorized && (to.name == 'Join Room' || to.name == 'Create Room' || to.name == 'Pick Movie' || to.name == 'Movie Ratings')){
    return {
      name: 'Sign In'
    }
  }
  if (!store.state.waiting && to.name == 'Waiting Room'){
    if (authorized){
      return {
        name: 'Join Room'
      }
    }
    else {
      return {
        name: 'Sign In'
      }
    }
  }
});

export default router;