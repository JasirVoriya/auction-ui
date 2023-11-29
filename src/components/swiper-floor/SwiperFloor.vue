<script setup lang="ts">
</script>
<template>
  <container-box>
    <div class="w-full flex py-2">
      <div class="w-[27%] rounded-l-lg shadow-lg p-3">
        <category-card />
      </div>
      <div class="w-[50%] rounded-xl shadow-lg overflow-hidden scale-[1.02] ">
        <swiper-card />
      </div>
      <div class="w-[23%] rounded-r-lg shadow-lg p-3">
        <user-center-card />
      </div>
    </div>
  </container-box>
</template>
<style scoped></style>