<template>
  <div>
    <button v-if="!store.loggedIn">
      <router-link to="/register">
        Registration
      </router-link>
    </button>
    <button v-if="!store.loggedIn">
      <router-link to="/sign_in">
        Sign In
      </router-link>
    </button>
    <button v-if="store.loggedIn">
      Sign Out
    </button>
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

</style>
