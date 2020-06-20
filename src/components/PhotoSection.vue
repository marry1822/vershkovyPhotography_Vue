<template>
  <div class="standard-section" id="catalog">
    <h2 class="photo-title title">Catalog</h2>
    <div class="photo-container">
      <BRow>
        <BCol cols="4" v-for="(photo, index) in paginatedData" :key="index">
          <PhotoItem :photos="photo" @addToFavourites="addToFavourites" />
        </BCol>
      </BRow>
    </div>
    <div class="catalog-pagination d-flex justify-content-center">
      <BPagination
        v-model="currentPage"
        :per-page="perPage"
        :total-rows="total"
        pills
        size="sm"
        prev-text="Prev"
        next-text="Next"
      />
    </div>
  </div>
</template>

<script>
import photos from "@/store/photos/photos.js";
import PhotoItem from "@/components/PhotoItem";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "PhotoSection",
  data: () => ({
    photos,
    currentPage: 1,
    perPage: 12
  }),
  components: {
    PhotoItem
  },
  computed: {
    paginatedData() {
      const from = this.currentPage * this.perPage - this.perPage;
      const to = this.currentPage * this.perPage;
      return this.photos.slice(from, to);
    },
    total() {
      console.log(this.photos.length);
      return this.photos.length;
    },
    ...mapGetters(["FAVOURITES"])
  },
  methods: {
    ...mapActions(["ADD_TO_FAVOURITES"]),
    addToFavourites(photos) {
      this.ADD_TO_FAVOURITES(photos);
    }
  }
};
</script>

<style scoped>
.standard-section {
  padding: 50px 0 0 0;
  margin-top: 100px;
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
  padding: 50px 0;
  font-weight: bold;
  opacity: 0.8;
  font: 700 30px/1 "Quicksand", sans-serif;
}
</style>
