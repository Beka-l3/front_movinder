<template>
  <div class="center join_room_flex">
    <input v-model="roomSlug" placeholder="Room Token" type="text" />
    <button @click="joinRoom()">
      Join Room
    </button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Join Room',
  data() {
    return {
      roomSlug: "string",
      backendUrl: "http://localhost:8080/room/"
    }
  },
  methods: {
    async joinRoom(){
      let headers = {
        'Authorization': `Bearer ${this.$store.state.authToken}`,
      }
      let response = await axios.post(this.backendUrl + this.roomSlug + "/join", undefined, { headers });
      console.log(response);
      this.$router.push("/waiting_room");
    },
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