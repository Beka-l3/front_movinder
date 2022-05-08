<template>
  <div class="center auth_flex">
    <input v-model="username" placeholder="Username" type="text" />
    <input v-model="password" placeholder="Password" type="password" />
  
    <button @click="register">
      Register Your Account
    </button>
  
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Registration',
  data(){
    return {
      username: "",
      password: "", 
      backendURL: "http://localhost:8080/user/register",
    }
  },
  methods: {
    async register(){
        let headers = {
          "username": this.username,
          "password": this.password  
        };
        let response = await axios.post(this.backendURL, headers);
        this.$router.push({name: 'Sign In'});
      }
  }
}

</script>
