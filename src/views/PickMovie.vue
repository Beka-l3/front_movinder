<template>
  <div class="pick_movie_flex">
    <div>
      <button class="buttons" @click="rateMovie(false)">
        Dislike
      </button>
    </div>
    <div>
      <img src="../assets/sample_poster.jpg">
      <!-- <img src="currentMovie"> -->
    </div>
    <div>
      <button class="buttons" @click="rateMovie(true)">
        Like
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Pick Movie',
  data(){
    return {
      curMovie: null,
    }
  },
  methods: {
    rateMovie(liked){
      //sendToBackend(curMovie, liked)
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