<template>
  <div class="info-section" id="about_us">
    <h2 class="about-us-title title">About Us</h2>
    <div class="info-container d-flex align-center justify-between">
      <p class="about-us">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni amet,
        magnam nisi quae molestiae consectetur nostrum deleniti ipsa saepe
        consequatur aspernatur autem quasi reiciendis illum, alias vitae nulla
        officiis ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Autem quod vitae qui totam, dolorum tenetur officiis fugit omnis,
        numquam possimus aut iste sequi? Distinctio dolorem, placeat sit
        veritatis doloremque quibusdam!
      </p>
      <div class="our-photo">
        <img src="@/assets/we.png" class="we" height="300px" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  data: () => ({})
};
</script>

<style scoped>
.info-section {
  background-color: rgba(0, 0, 0, 0.2);
  margin: auto;
  margin-top: 100px;
  padding: 50px 0 0 0;
}

.info-container {
  max-width: 1170px;
  margin: auto;
  padding: 30px 15px;
}

.about-us {
  max-width: 50%;
  line-height: 36px;
  text-align: justify;
  font: 400 20px/40px "Quicksand", sans-serif;
}

.our-photo .we {
  z-index: 99;
  height: 350px;
}

.we:hover {
  transform: scale(1.15);
  transition: all 0.7s ease;
}

.title {
  letter-spacing: 8px;
  text-transform: uppercase;
  text-align: center;
  padding: 50px 0;
  font-weight: bold;
  opacity: 0.8;
  font: 700 30px/1 "Quicksand", sans-serif;
}

.align-center {
  align-items: center;
}

.justify-between {
  justify-content: space-between;
}
</style>
