import Vue from "vue";
import Vuex from "vuex";
import photos from "./photos/photos";
import equipment from "./photos/equipment";
import icons from "./photos/footerIcons";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    catalogPhotos: [],
    favourites: [],
    // click: true
  },
  mutations: {
    TO_FAVOURITES(state, photo) {
      if (state.favourites.length) {
        let isExist = false;
        state.favourites.map(function(item, index) {
          if (item.image === photo.image) {
            isExist = true;
            state.favourites.splice(index, 1);
            // alert("This photo has already added to favourites");
            return;
          }
        });
        if (!isExist) {
          state.favourites.push(photo);
        }
      } else {
        state.favourites.push(photo);
      }
    },
    REMOVE_FROM_FAV(state, index) {
      state.favourites.splice(index, 1);
      // state.clicked = false;
    }
    // CHANGE_LIKE_STYLE(state, click) {
    //   console.log(state.click);
    //   state.click = !click;
    // }
  },
  actions: {
    ADD_TO_FAVOURITES({ commit }, photo) {
      commit("TO_FAVOURITES", photo);
    },
    REMOVE_FROM_FAVOURITES({ commit }, index) {
      commit("REMOVE_FROM_FAV", index);
    }
    // CHANGE_LIKE({ commit }, click) {
    //   commit("CHANGE_LIKE_STYLE", click);
    // }
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
