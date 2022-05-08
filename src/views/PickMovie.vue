<template>
  <div class="pick_movie_flex">
    <div>
      <button class="buttons" @click="likeMovie()">
        Dislike
      </button>
    </div>
    <div>
      <img src="../assets/sample_poster.jpg">
      <!-- <img src="currentMovie"> -->
    </div>
    <div>
      <button class="buttons" @click="dislikeMovie()">
        Like
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { store } from '../store.js';

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
    }
  },
  methods: {
    likeMovie(){
      
    },
    dislikeMovie(){
      
    }
  },
  mounted(){
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