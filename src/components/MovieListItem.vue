<template>
  <div class="movie_list_item_flex">
    <img :src="movieInfo.posterUrl">
    <div class="movie_desc_container">
      <ul class="movie_list_item_desc">
        <li>
          {{ movieInfo.name }}
        </li>
        <li>
          {{ movieInfo.description }}
        </li>
        <li>
          {{ movieInfo.genres }}
        </li>
        <li>
          {{ movieInfo.rating }}
        </li>
        <li>
          Likes: {{ ranking.likedUsers.length }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ["ranking"],
  name: 'Movie List Item',
  data(){
    return {
      title: "string",
      prod: "Prod: James Cameron",
      year: "Year: 2022",
      rating: "Rating: 10.0",
      votes: "Votes: inf/inf",
      movieInfo: {
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
      backendUrl: "http://localhost:8080/movies/" + this.ranking.movieId,
    }
  },
  async mounted(){
    //console.log(this.ranking);
    let headers = {
      'Authorization': `Bearer ${this.$store.state.authToken}`,
    }
    let response = await axios.get(this.backendUrl, { headers });
    this.movieInfo = response.data;
  }
}

</script>

<style scoped>

.movie_list_item_flex {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
}

.movie_list_item_desc {
  display: flex;
  flex-direction: column;
  list-style: none;
}

.movie_desc_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

img {
  max-width: 300px;
}

</style>