<template>
  <div class="photo-item">
    <b-modal id="modal-1" :title="photos.desc" v-model="modalShow" hide-footer>
      <img :src="photos.image" />
    </b-modal>
    <img
      :src="photos.image"
      @click="modalShow = !modalShow"
      class="open-photo"
    />
    <b-button class="add-to-favourites" @click="addToFavourites"
      >Add to favorites</b-button
    >
  </div>
</template>

<script>
export default {
  name: "PhotoItem",
  props: {
    photos: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    modalShow: false
  }),
  methods: {
    addToFavourites() {
      this.$emit("addToFavourites", this.photos);
    }
  }
};
</script>

<style scoped>
.photo-item {
  box-shadow: 0 13px 27px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  position: relative;
}

.photo-item:hover {
  opacity: 0.8;
  background-color: rgba(0, 0, 0, 0.7);
  transition: all 0.3s ease;
  cursor: pointer;
}

.photo-item:hover {
  visibility: visible;
  transition: all 0.5s ease;
}

.photo-item img {
  display: block;
}

.add-to-favourites {
  position: absolute;
  right: 2%;
  bottom: 2%;
  font-size: 12px;
  height: 30px;
  border-radius: 15px;
  border: none;
  opacity: 0.5;
}

.add-to-favourites:hover {
  color: #fff;
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
