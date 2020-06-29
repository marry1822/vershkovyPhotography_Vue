import Vue from "vue";
import Vuex from "vuex";
import photos from "./photos/photos";
import equipment from "./photos/equipment";
import icons from "./photos/footerIcons";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    catalogPhotos: [],
    favourites: []
  },
  mutations: {
    TO_FAVOURITES(state, photo) {
      state.favourites.push(photo);
    },
    REMOVE_FROM_FAV(state, index) {
      state.favourites.splice(index, 1);
    }
  },
  actions: {
    ADD_TO_FAVOURITES({ commit, state }, photo) {
      if (state.favourites.length) {
        let isExist = false;
        state.favourites.findIndex(function(item) {
          if (item.image === photo.image) {
            isExist = true;
            alert("This photo has already added to favourites");
            return;
          }
        });
        if (!isExist) {
          commit("TO_FAVOURITES", photo);
        }
      } else {
        commit("TO_FAVOURITES", photo);
      }
    },
    REMOVE_FROM_FAVOURITES({ commit }, index) {
      commit("REMOVE_FROM_FAV", index);
    }
  },
  getters: {
    CATALOG_PHOTOS(state) {
      return state.catalogPhotos;
    },
    FAVOURITES(state) {
      return state.favourites;
    }
  },
  modules: {
    photos,
    equipment,
    icons
  }
});
