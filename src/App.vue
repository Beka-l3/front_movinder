<template>
  <div id="app" class="app_flex">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>

import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>

input {
  color: white;
}

body {
  height: 100%;
  width: 100%;
  position: fixed;
}

#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: black;
}

.app_flex {
  display: flex;
  flex-direction: column;
}

</style>
