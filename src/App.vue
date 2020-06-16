<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
import Main from "@/components/Main";
export default {
  name: "App",
  components: {
    Main
  }
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font: 400 18px/1 "Barlow Condensed", sans-serif;
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
