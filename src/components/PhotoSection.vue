<template>
  <div class="standard-section">
    <h2 class="photo-title title">Catalog</h2>
    <div class="photo-container">
      <BRow>
        <BCol cols="4" v-for="(photo, index) in photos" :key="index">
          <PhotoItem :photos="photo" />
        </BCol>
      </BRow>
    </div>
  </div>
</template>

<script>
import photos from "@/store/photos/photos.js";
import PhotoItem from "@/components/PhotoItem";
export default {
  name: "PhotoSection",
  data: () => ({
    photos
  }),
  components: {
    PhotoItem
  }
};
</script>

<style scoped>
.standard-section {
  padding: 50px 0 0 0;
  margin-top: 150px;
}

.photo-container {
  max-width: 1170px;
  margin: auto;
  padding: 30px 15px;
}

.title {
  letter-spacing: 8px;
  text-transform: uppercase;
  text-align: center;
  padding: 30px 0;
  font-weight: bold;
  opacity: 0.8;
  font: 700 30px/1 "Quicksand", sans-serif;
}
</style>

// { image: "../assets/one.png" }, // { image: "../assets/2.png" }, // { image:
"../assets/3.png" }, // { image: "../assets/4.png" }, // { image:
"../assets/5.png" }, // { image: "../assets/6.png" }, // { image:
"../assets/7.png" }, // { image: "../assets/8.png" }, // { image:
"../assets/9.png" }, // { image: "../assets/10.png" }, // { image:
"../assets/11.png" }, // { image: "../assets/12.png" }
