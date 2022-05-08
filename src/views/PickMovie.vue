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
    console.log(this.$store.state.justEntered);
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