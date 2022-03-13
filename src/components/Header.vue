<template>
  <div class="header_flex">
    <div class="room_flex">
      <router-link to="/join_room">
        Join Room
      </router-link>
      <router-link to="/pick_movie">
        Back To Movies
      </router-link>
      <router-link to="/movie_ratings">
        Movie Ratings
      </router-link>
      <router-link to="/create_room">
        Create Room
      </router-link>
    </div>
    <div class="header_auth_flex">
      <router-link v-if="!store.loggedIn" to="/register">
        Register
      </router-link>
      <router-link v-if="!store.loggedIn" to="/sign_in">
        Sign In
      </router-link>
      <router-link to="/">
        Sign Out
      </router-link>
    </div>
  </div>
</template>

<script>
import { store } from '../store.js';
import { useRouter } from "vue-router";

export default {
  name: 'Header',
  data(){
    return {
      store,
      useRouter,
    }
  },
  methods: {
    signIn(){
      this.store.logIn();
    },
    signOut(){
      this.store.logOut();
    }
  }
}


</script>

<style scoped>

div a {
  color: white;
}

.header_flex {
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
}

.room_flex {
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding-left: 35%;
}

.header_auth_flex {
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding-right: 10px;
}

</style>
