<template>
  <div>
    Create Room
    <br>
    <button>
      <router-link to='/join_room'>Join Room</router-link>
    </button>
    Some information or settings
    <button>
      Enter
    </button>
  </div>
</template>

<script>

export default {
  name: 'Create Room',
  data() {
    return {
      
    }
  }

}
</script>


<style scoped>
div a {
  color: white;
}

</style>
