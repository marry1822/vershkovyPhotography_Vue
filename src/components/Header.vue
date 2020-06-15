<template>
  <header class="header">
    <BContainer class="container d-flex align-center justify-between">
      <a href="#" class="logo"
        >Vershkovy<span class="logo-span">photography</span></a
      >
      <BNav class="main-header-nav">
        <a href="#">About us</a>
        <a href="#">Catalog</a>
        <a href="#">Contacts</a>
        <!-- <router-link :to="{ name: 'about-us' }">
          <a href="#">About us</a>
        </router-link>
        <router-link :to="{ name: 'catalog' }">
          <a href="#">Catalog</a>
        </router-link>
        <router-link :to="{ name: 'equipment' }">
          <a href="#">Equipment</a>
        </router-link> -->
      </BNav>
    </BContainer>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
/* .d-flex {
  display: flex;
} */
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
  font-size: 50px;
  color: rgba(0, 0, 0, 0.8);
  letter-spacing: 7px;
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

.container a:hover {
  color: gray;
  text-decoration: none;
}
</style>
