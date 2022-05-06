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
//import axios from 'axios';

export default {
  name: 'Registration',
  data(){
    return {
      
    }
  },
  methods: {
    register(){
        /*let headers = {
          "username": this.username,
          "password": this.password  
        };
        let response = await axios.get(this.backendURL, { headers });*/

        this.$router.push({name: 'Sign In'});
      }
  }
}

</script>
