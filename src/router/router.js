import Vue from "vue";
import Router from "vue-router";
import Header from "@/components/Header";
import PhotoSection from "@/components/PhotoSection";
import AboutUs from "@/components/AboutUs";
import Equipment from "@/components/Equipment";
import Footer from "@/components/Footer";
Vue.use(Router);

const router = new Router({
  routes: [
    { path: "/", name: "header", component: Header, props: true },
    {
      path: "/catalog",
      name: "catalog",
      component: PhotoSection,
      props: true
    },
    { path: "/about_us", name: "about-us", component: AboutUs, props: true },
    {
      path: "/equipment",
      name: "equipment",
      component: Equipment,
      props: true
    },
    { path: "/footer", name: "footer", component: Footer, props: true }
  ]
});

export default router;
