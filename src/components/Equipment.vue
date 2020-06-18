<template>
  <div class="equipment-section">
    <h2 class="equipment-title title">Our equipment</h2>
    <div class="equipment-container d-flex align-center justify-between">
      <a
        v-for="(item, index) in equipment"
        :key="index"
        :href="item.href"
        target="_blank"
        ><img :src="item.image" class="equipment" width="200px"
      /></a>
    </div>
  </div>
</template>

<script>
import equipment from "@/store/photos/equipment.js";
export default {
  name: "Equipment",
  data: () => ({
    equipment
  })
};
</script>

<style scoped>
.title {
  letter-spacing: 8px;
  text-transform: uppercase;
  text-align: center;
  padding: 50px 0;
  font-weight: bold;
  opacity: 0.8;
  font: 700 30px/1 "Quicksand", sans-serif;
}

.justify-between {
  justify-content: space-between;
}

.align-center {
  align-items: center;
}

.equipment-section {
  margin: auto;
  margin-top: 150px;
  padding-top: 30px 30px;
}

.equipment-container {
  max-width: 1170px;
  margin: auto;
  padding: 30px 15px;
  flex-direction: row;
}

.equipment {
  margin: 20px;
}

.equipment:hover {
  opacity: 0.8;
  background-color: rgba(0, 0, 0, 0.7);
  transition: all 0.4s ease;
  transform: scale(1.04);
}
</style>
