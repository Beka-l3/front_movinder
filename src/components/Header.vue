<template>
  <div class="header_flex">
    <div class="room_flex">
      <router-link v-if="$store.state.authorized" to="/join_room">
        Join Room
      </router-link>
      <router-link v-if="$store.state.authorized" to="/pick_movie">
        Back To Movies
      </router-link>
      <router-link v-if="$store.state.authorized" to="/movie_ratings">
        Movie Ratings
      </router-link>
      <router-link v-if="$store.state.authorized" to="/create_room">
        Create Room
      </router-link>
    </div>
    <div class="header_auth_flex">
      <router-link v-if="!$store.state.authorized" to="/register">
        Register
      </router-link>
      <router-link v-if="!$store.state.authorized" to="/sign_in">
        Sign In
      </router-link>
      <button @click="signOut" v-if="$store.state.authorized">
        Sign Out
      </button>
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
    signOut(){
      this.$store.commit('loggedOut');
      this.$router.push('/');
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
