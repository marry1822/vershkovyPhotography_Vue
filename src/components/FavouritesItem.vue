<template>
  <div class="fav-item">
    <img class="fav-img" :src="favPhotos.image" />
    <button class="deleteBtn" @click="deleteFromFav">Delete</button>
  </div>
</template>

<script>
export default {
  name: "FavouritesItem",
  props: {
    favPhotos: {
      type: Array
    }
  },
  methods: {
    deleteFromFav() {
      this.$emit("deleteFromFav");
    }
  }
};
</script>

<style scoped>
.fav-item {
  box-shadow: 0 13px 27px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  position: relative;
}

.fav-img {
  display: block;
}

.deleteBtn {
  position: absolute;
  right: 2%;
  bottom: 2%;
  width: 80px;
  height: 20px;
  border-radius: 15px;
  border: none;
  opacity: 0.5;
}
</style>
