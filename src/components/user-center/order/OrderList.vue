<script setup lang="ts">
const page = ref(1);
const pageChange = (value:Number) => {
  console.log(value);
};
</script>
<template>
  <div class="flex flex-col items-center">
    <div class="flex flex-col gap-4 mb-5">
      <order-item v-for="_ in 5" />
    </div>
    <nut-pagination v-model="page" :total-items="250" :items-per-page="5" @change="pageChange" />
  </div>
</template>