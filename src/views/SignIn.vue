<template>
  <div>
    <input v-model="username" placeholder="username" type="text" />
    <input v-model="password" placeholder="password" type="password" />
    <button>
      Enter
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
