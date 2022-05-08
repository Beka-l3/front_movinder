<template>
  <div class="center create_room_flex">
    <br>  
    <button @click="createRoom()">
      Create Room
    </button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Create Room',
  data() {
    return {
      roomSlug: "string",
      backendUrl: "http://localhost:8080/room/create",  
    }
  },
  methods:{
    async createRoom(){
      let headers = {
        'Authorization': `Bearer ${this.$store.state.authToken}`,
      }
      console.log(headers);
      let response = await axios.post(this.backendUrl, undefined, { headers });
      this.roomSlug = response.data.slug;
      this.$store.commit('updateRoomSlug', this.roomSlug);
      this.$router.push('/waiting_room');
    }
  }
}
</script>


<style scoped>
.create_room_flex {
  display: flex;
  flex-direction: column;
  width: 20%;
  gap: 10px;
}

div a {
  color: white;
}

</style>
