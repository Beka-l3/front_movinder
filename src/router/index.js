import { createRouter, createWebHistory } from 'vue-router';
import Registration from '../views/Registration.vue';
import SignIn from '../views/SignIn.vue';
import JoinRoom from '../views/JoinRoom.vue';
import CreateRoom from '../views/CreateRoom.vue';
import Home from '../views/Home.vue';
import PickMovie from '../views/PickMovie';
import MovieRatings from '../views/MovieRatings';

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
  },
  {
    path: '/pick_movie',
    name: 'Pick Movie',
    component: PickMovie
  },
  {
    path: '/movie_ratings',
    name: 'Movie Ratings',
    component: MovieRatings
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
});

export default router;