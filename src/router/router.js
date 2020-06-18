import Vue from "vue";
import Router from "vue-router";
import Favourites from "@/components/Favourites";
import Main from "@/components/Main";
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/favourites",
      name: "favourites",
      component: Favourites,
      props: true
    },
    {
      path: "/",
      name: "main",
      component: Main,
      props: true
    }
  ]
});

export default router;
