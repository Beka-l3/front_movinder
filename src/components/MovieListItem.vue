<template>
  <div class="movie_list_item_flex">
    <img src="../assets/sample_poster.jpg">
    <div class="movie_desc_container">
      <ul class="movie_list_item_desc">
        <li>
          {{ title }}
        </li>
        <li>
          {{ prod }}
        </li>
        <li>
          {{ year }}
        </li>
        <li>
          {{ rating }}
        </li>
        <li>
          {{ votes }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Movie List Item',
  data(){
    return {
      title: "Title: Avangard",
      prod: "Prod: James Cameron",
      year: "Year: 2022",
      rating: "Rating: 10.0",
      votes: "Votes: inf/inf"
    }
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