<template>
  <div class="catalog-pagination d-flex justify-content-center">
    <BPagination />
  </div>
</template>

<script>
export default {
  name: "CatalogPagination"
};
</script>

<style scoped>
.justify-center {
  justify-content: center;
}

.catalog-pagination {
  margin-top: -15px;
}
</style>
