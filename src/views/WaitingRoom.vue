<template>
  <div class="center waiting_room_flex">
    {{ roomSlug }}
    <br>  
    <button @click="start()">
      Start
    </button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Waiting Room',
  data() {
    return {
      roomSlug: "string",
      backendUrl: "http://localhost:8080/room/",  
    }
  },
  mounted(){
    this.roomSlug = this.$store.state.roomSlug;
    this.$store.commit('justEntered');
  },
  methods: {
    async start(){
      let headers = {
        'Authorization': `Bearer ${this.$store.state.authToken}`,
      }
      let response = await axios.post(this.backendUrl + this.roomSlug + "/start", undefined, { headers });
      this.$router.push("/pick_movie");
    }
  }

}
</script>


<style scoped>
.waiting_room_flex {
  display: flex;
  flex-direction: column;
  width: 20%;
  gap: 10px;
}

div a {
  color: white;
}

</style>
