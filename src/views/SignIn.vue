<template>
  <div class="center auth_flex">
    <input v-model="username" placeholder="Username" type="text" />
    <input v-model="password" placeholder="Password" type="password" />
    
    <button>
      Login to Your Account
    </button>
    
  </div>
</template>

<script>

export default {
  name: 'SignIn',
  data(){
    return {

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
