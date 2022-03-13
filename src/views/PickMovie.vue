<template>
  <div class="pick_movie_flex">
    <div>
      <button class="buttons">
        Dislike
      </button>
    </div>
    <div>
      <img src="../assets/sample_poster.jpg">
    </div>
    <div>
      <button class="buttons">
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
      
    }
  }
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