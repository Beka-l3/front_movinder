<template>
  <div class="movie_stats">
    <div v-for="ranking in movieStats.ranking" :key="ranking">
      <MovieListItem v-bind:ranking=ranking>

      </MovieListItem>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import MovieListItem from '../components/MovieListItem.vue';

export default {
  name: 'Movie Ratings',
  components: {
    MovieListItem
  },
  data(){
    return {
      roomSlug: "string",
      backendUrl: "http://localhost:8080/room/",
      movieStats: {
        matchedMovies: [],
        ranking: []
      },
    }
  },
  async mounted(){
    this.roomSlug = this.$store.state.roomSlug;
    let headers = {
      'Authorization': `Bearer ${this.$store.state.authToken}`,
    }
    let response = await axios.get(this.backendUrl + this.roomSlug + "/stats", { headers });
    this.movieStats = response.data;
    console.log(response);
  }
}

</script>

<style scoped>
.movie_stats {
  display:flex;
  flex-direction:column;
  gap: 20px;
  overflow-y: auto;
}
</style>