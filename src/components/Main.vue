<template>
  <div class="main">
    <Header />
    <PhotoSection />
    <!-- <CatalogPagination /> -->
    <AboutUs />
    <Equipment />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import PhotoSection from "@/components/PhotoSection";
// import CatalogPagination from "@/components/CatalogPagination";
import AboutUs from "@/components/AboutUs";
import Equipment from "@/components/Equipment";
import Footer from "@/components/Footer";

export default {
  name: "Main",
  components: {
    Header,
    PhotoSection,
    // CatalogPagination,
    AboutUs,
    Equipment,
    Footer
  }
};
</script>

<style scoped></style>
