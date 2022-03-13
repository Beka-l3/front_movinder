<template>
  <div class="center auth_flex">
    <input v-model="username" placeholder="Username" type="text" />
    <input v-model="password" placeholder="Password" type="password" />
  
    <button>
      Register Your Account
    </button>
  
  </div>
</template>

<script>

export default {
  name: 'Registration',
  data(){
    return {
      
    }
  }
}

</script>
