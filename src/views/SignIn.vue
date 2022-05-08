<template>
  <div class="center auth_flex">
    <input v-model="username" placeholder="Username" type="text" />
    <input v-model="password" placeholder="Password" type="password" />
    
    <button @click="login">
      Login to Your Account
    </button>
    
  </div>
</template>

<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
  name: 'SignIn',
  data(){
    return {
      store,
      username: "",
      password: "",
      backendURL: "http://localhost:8080/user/login",
    }
  },
  methods: {
    async login(){
      let headers = {
        "username": this.username,
        "password": this.password  
      };
      let response = await axios.post(this.backendURL, headers);
      let token = response.data.token;
      this.$store.commit('updateAuthToken', token);
      this.$store.commit('loggedIn');
      //console.log(this.$store.state.authToken);
      
      this.$router.push({name: 'Join Room'});
    }
  }
}

</script>

<style>

button {
  font-size: 1em;
  font-weight: 300;
  text-transform: none;
  letter-spacing: normal;
}

.auth_flex {
  display: flex;
  flex-direction: column;
  width: 30%;
}

.center {
  position: relative;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
}

</style>
