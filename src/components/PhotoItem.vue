<template>
  <div class="photo-item">
    <button class="open-photo" @click="modalShow = !modalShow">
      Open
    </button>
    <b-modal id="modal-1" :title="photos.desc" v-model="modalShow" hide-footer>
      <img :src="photos.image" />
    </b-modal>
    <img :src="photos.image" />
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
  })
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
  position: absolute;
  width: 100px;
  height: 30px;
  border-radius: 15px;
  border: none;
  opacity: 0.5;
  right: 37%;
  top: 50%;
  visibility: hidden;
}
</style>
