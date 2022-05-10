<template>
  <div class="center waiting_room_flex">
    <h6> Waiting for Others</h6>
    <br>
    <h6>Joined Users: {{ joinedPeople }} </h6>
    <br>
    {{ roomSlug }}
    <br>  
    <button v-if="$store.state.creator" @click="start()">
      Start
    </button>
  </div>
</template>

<script>
//import Stomp from "@stomp/stompjs";
import axios from 'axios';
import { Client, Message } from '@stomp/stompjs';


export default {
  name: 'Waiting Room',
  data() {
    return {
      roomSlug: "string",
      backendUrl: "http://localhost:8080/room/",  
      socketUrl: "http://localhost:8080/ws-api",
      joinedPeople: [],
      socketData: [],
      connectedToSocket: null,
      socket: null,
      stompClient: null,
    }
  },
  async mounted(){
    
    this.roomSlug = this.$store.state.roomSlug;
    this.$store.commit("enteredBefore", true);
    
    //let StompJs = require('@stomp/stompjs');
    const client = new Client({
      brokerURL: 'ws://localhost:8080/ws-api',
      connectHeaders: {
        "x-auth-token": this.$store.state.authToken
      },
      debug: function (str) {
        console.log(str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });
    
    client.activate();
    
    //console.log(client.activate());
    const router = this.$router;
    var callback = function (message) {
      // called when the client receives a STOMP message from the server
      if (message.body) {
        alert('got message with body ' + message.body);
      } else {
        alert('got empty message');
      }
      router.push("/pick_movie");
    };
    //console.log(client.subscribe('/start/' + this.roomSlug, callback));
    //console.log('hello');
    //await setTimeout(() => {client.subscribe('/start/' + this.roomSlug, callback)}, 5000); 
    const headers = { "x-auth-token": this.$store.state.authToken };
    const roomSlug = this.roomSlug;
    client.onConnect = function (frame) {
      // Do something, all subscribes must be done is this callback
      // This is needed because this will be executed after a (re)connect
      
      client.subscribe('/start/' + roomSlug, callback, headers);
    };


    this.fetchUsersData();
    await setInterval(() => {this.fetchUsersData()}, 2500);



  },
  methods: {
    async fetchUsersData() {
      let headers = {
        'Authorization': `Bearer ${this.$store.state.authToken}`,
      }
      let response = await axios.get(this.backendUrl + this.roomSlug + '/info', { headers })
      this.joinedPeople = response.data.users;
    },
    async start(){
      let headers = {
        'Authorization': `Bearer ${this.$store.state.authToken}`,
      }
      let response = await axios.post(this.backendUrl + this.roomSlug + "/start", undefined, { headers });
      console.log(response);
      this.$store.commit("isWaitingRoom", false);

      const client = new Client({
        brokerURL: 'ws://localhost:8080/ws-api',
        connectHeaders: {
          "x-auth-token": this.$store.state.authToken
        },
        debug: function (str) {
          console.log(str);
        },
        reconnectDelay: 5000,
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
      });
      
      client.activate();
      
     
      headers = { "x-auth-token": this.$store.state.authToken };
      const roomSlug = this.roomSlug;
      client.onConnect = function (frame) {
        // Do something, all subscribes must be done is this callback
        // This is needed because this will be executed after a (re)connect
        
        client.publish({
          destination: '/start/' + roomSlug,
          body: 'Room Started',
          headers: { headers },
        });
        client.deactivate();
      };

      //this.$router.push("/pick_movie");
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
