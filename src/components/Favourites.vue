<template>
  <div class="fav-section d-flex align-center justify-center">
    <h3 class="title">Favourites</h3>
    <router-link class="r-link" :to="{ name: 'main' }">
      <b-button pill variant="outline-secondary" class="back-to-main">
        Back to main
      </b-button>
    </router-link>
    <template v-if="isEmpty">
      <BRow>
        <BCol cols="3" v-for="(item, index) in favData" :key="item">
          <FavouritesItem
            :favPhotos="item"
            @deleteFromFav="deleteFromFav(index)"
          />
        </BCol>
      </BRow>
    </template>
    <p class="no-photos" v-else>There are no favourite photos yet...</p>
  </div>
</template>

<script>
import FavouritesItem from "@/components/FavouritesItem";
import { mapActions } from "vuex";
export default {
  name: "Favourites",
  components: {
    FavouritesItem
  },
  props: {
    favData: {
      type: Array
    }
  },
  methods: {
    ...mapActions(["REMOVE_FROM_FAVOURITES"]),
    deleteFromFav(index) {
      this.REMOVE_FROM_FAVOURITES(index);
    }
  },
  computed: {
    isEmpty() {
      return this.favData.length;
    }
  }
};
</script>

<style scoped>
.fav-section {
  margin: auto;
  margin-top: 30px;
  padding-top: 30px 30px;
  max-width: 1170px;
  flex-direction: column;
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

.r-link {
  text-decoration: none;
  text-transform: capitalize;
  color: rgba(0, 0, 0, 0.8);
}

.back-to-main {
  margin-bottom: 30px;
}

.no-photos {
  text-align: center;
  font-weight: lighter;
  color: gray;
}
</style>
