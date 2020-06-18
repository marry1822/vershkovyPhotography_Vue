<template>
  <header class="header">
    <BContainer class="container d-flex align-center justify-between">
      <a href="#" class="logo"
        >Vershkovy<span class="logo-span">photography</span></a
      >
      <BNav class="main-header-nav">
        <a href="#about_us">About us</a>
        <a href="#catalog">Catalog</a>
        <a href="#contacts">Contact us</a>
        <router-link
          :to="{ name: 'favourites', params: { favData: FAVOURITES } }"
        >
          <a class="favourites" href="favourite"
            >Favourites: {{ FAVOURITES.length }}</a
          >
        </router-link>
      </BNav>
    </BContainer>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapGetters(["FAVOURITES"])
  }
};
</script>

<style scoped>
.header {
  background-color: #fff;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
}

.align-center {
  align-items: center;
}

.justify-between {
  justify-content: space-between;
}

.container {
  max-width: 1140px;
  padding: 0 15px;
  margin: auto;
  border-bottom: 2px solid;
  border-color: rgba(0, 0, 0, 0.8);
  height: 150px;
}

.logo {
  /* font-size: 50px; */
  color: rgba(0, 0, 0, 0.8);
  letter-spacing: 7px;
  font: 400 50px/1 "Quicksand", sans-serif;
}
.logo span {
  font: 400 20px/1 "Quicksand", sans-serif;
  color: gray;
}

.main-header-nav {
  margin-right: 40px;
}

.main-header-nav a {
  text-decoration: none;
  text-transform: capitalize;
  color: rgba(0, 0, 0, 0.8);
}

.main-header-nav a + a {
  padding-left: 20px;
}

.main-header-nav .favourites {
  font-weight: bold;
}

.container a:hover {
  color: gray;
  text-decoration: none;
}
</style>
