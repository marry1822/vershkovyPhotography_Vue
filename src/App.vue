<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapGetters(["FAVOURITES"])
  }
};
</script>

<style>
#app {
  font-family: Barlow Condensed, Quicksand, sans-serif;
  /* font: 400 18px/1 "Barlow Condensed", sans-serif; */
  color: black;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a :hover {
  text-decoration: none;
}
button {
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  cursor: pointer;
}
h1,
h2,
h3,
h4,
h5 {
  font-weight: 400;
}
img {
  max-width: 100%;
}
</style>
