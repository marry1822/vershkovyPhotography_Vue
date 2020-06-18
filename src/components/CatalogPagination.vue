<template>
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
</template>

<script>
export default {
  name: "CatalogPagination",
  data: () => ({
    currentPage: 1,
    total: 60,
    perPage: 12
  })
};
</script>

<style scoped>
.justify-center {
  justify-content: center;
}

.catalog-pagination {
  margin-top: -15px;
}

.catalog-pagination >>> .pagination .page-item .page-link {
  background-color: transparent;
  font-size: 12px;
  color: black;
  box-shadow: none;
}

.catalog-pagination >>> .pagination .page-item.active .page-link {
  border-color: grey;
  background-color: #fff;
  color: black;
}
.catalog-pagination >>> .pagination .page-item.disabled .page-link {
  color: lightgrey;
}
</style>
