<template>
  <div class="center join_room_flex">
    <input v-model="roomToken" placeholder="Room Token" type="text" />
    <button>
      Join Room
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

.join_room_flex {
  display: flex;
  flex-direction: column;
  width: 20%;
}

div a {
  color: white;
}

</style>