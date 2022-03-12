<template>
  <div>
    Join Room
    <br>
    <button>
      <router-link to='/create_room'>Create Room</router-link>
    </button>
    <input v-model="roomToken" placeholder="Room Token" type="text" />
    <button>
      Enter
    </button>
  </div>
</template>

<script>

export default {
  name: 'Join Room',
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