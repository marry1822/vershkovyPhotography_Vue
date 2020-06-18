<template>
  <footer class="footer" id="contacts">
    <div class="footer-container d-flex align-center justify-center">
      <BNav class="footer-nav">
        <a v-for="(icon, index) in icons" :key="index" href="#"
          ><img :src="icon"
        /></a>
      </BNav>
      <span>© 2020 Vershkovy </span>
    </div>
  </footer>
</template>

<script>
import icons from "@/store/photos/footerIcons.js";
export default {
  name: "Footer",
  data: () => ({
    icons
  })
};
</script>

<style scoped>
.align-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.footer {
  background-color: #fff;
  padding: 0;
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0.5;
}

.footer-container {
  max-width: 1170px;
  padding: 0 15px;
  margin: auto;
  height: 100px;
  flex-direction: column;
}

.footer-nav {
  margin-bottom: 20px;
}

.footer-nav a {
  margin: 10px;
}

.footer-nav img:hover {
  transform: scale(1.04);
  transition: all 0.4s ease;
}
</style>
