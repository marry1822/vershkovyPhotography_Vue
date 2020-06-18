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
    <a @click="addToFavourites"
      ><img class="like" src="@/assets/heart.png" alt="like"
    /></a>
  </div>
</template>

<script>
export default {
  name: "PhotoItem",
  props: {
    photos: {
      type: Array
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
}

.photo-item:hover .open-photo {
  visibility: visible;
  transition: all 0.5s ease;
}

.photo-item img {
  display: block;
}

.open-photo {
  cursor: pointer;
}

.like {
  position: absolute;
  left: 2%;
  top: 90%;
  opacity: 0.5;
  cursor: pointer;
}

.like:hover {
  opacity: 1;
}
</style>
