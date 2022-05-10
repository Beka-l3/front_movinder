<template>
  <div class="pick_movie_flex">
    <div>
      <button class="buttons" @click="likeMovie()">
        Like
      </button>
    </div>
    <div>
      <img :src="curMovie.posterUrl">
      <!-- <img src="currentMovie"> -->
    </div>
    <div>
      <button class="buttons" @click="nextMovie()">
        Dislike
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { Client, Message } from '@stomp/stompjs';

export default {
  name: 'Pick Movie',
  data(){
    return {
      curMovie: {
        id: "string",
        name: "string",
        posterUrl: "../assets/sample_poster.jpg",
        description: "string",
        rating: {
          kinopoisk: 0,
          imdb: 0,
          tmdb: 0,
        },
        genres: [
          "string",
        ],
        actors: [
          {
            name: "string",
            photoUrl: "string",
          },
        ],
      },
      roomSlug: "string",
      roomId: "string",
      backendUrl: "http://localhost:8080/room/",
      curMovieId: "string",
    }
  },
  methods: {
    async likeMovie(){
      let data = {
        'movieId': this.curMovie.id,
      };
      let headers = {
        'Authorization': `Bearer ${this.$store.state.authToken}`,
      };
      let response = await axios.post(this.backendUrl + this.roomSlug + "/like", data, { headers });
      console.log(response);
      this.nextMovie();
    },
    async nextMovie(){
      let headers = {
        'Authorization': `Bearer ${this.$store.state.authToken}`,
      }
      let response = await axios.get(this.backendUrl + this.roomSlug + "/recommend", { headers });
      this.curMovie = response.data;
      this.$store.commit('updateMovie', this.curMovie);
      console.log(response);
    }
  },
  async mounted(){
    this.roomSlug = this.$store.state.roomSlug;
    let headers = {
      'Authorization': `Bearer ${this.$store.state.authToken}`,
    }
    let response = await axios.get(this.backendUrl + this.roomSlug + "/info", { headers });
    this.roomId = response.data.id;

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
    
    var callback = function (message) {
      // called when the client receives a STOMP message from the server
      if (message.body) {
        alert('got message with body ' + message.body);
      } else {
        alert('got empty message');
      }
    };
    //console.log(client.subscribe('/start/' + this.roomSlug, callback));
    //console.log('hello');
    //await setTimeout(() => {client.subscribe('/start/' + this.roomSlug, callback)}, 5000); 
    headers = { "x-auth-token": this.$store.state.authToken };
    const roomSlug = this.roomSlug;
    client.onConnect = function (frame) {
      // Do something, all subscribes must be done is this callback
      // This is needed because this will be executed after a (re)connect
      
      client.subscribe('/match/' + roomSlug, callback, headers);
    };
    //console.log(this.$store.state.justEntered);
    if (this.$store.state.justEntered){
      this.$store.commit("alreadyRated");
      this.nextMovie();
    }
    else {
      this.curMovie = this.$store.state.curMovie;
    }
    //if state is now entered
    //curMovie = getMovie();
    //if state is currently selecting
    //curMovie = retrieveFromState()
  },
}

</script>

<style scoped>
img {
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  object-fit: contain;
}

::-webkit-scrollbar {
  visibility: hidden;
}

.pick_movie_flex {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  overflow-y: scroll;
}

.buttons {
  top: 45%;
  position: sticky;
}

</style>