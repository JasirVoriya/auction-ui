<script setup lang="ts">
const state = reactive({
  page: 2,
  list: [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
  ]
});
onMounted(() => {
  setTimeout(() => {
    state.list.splice(1, 1);
  }, 3000);
});
</script>
<template>
  <nut-swiper class="h-[250px] w-[500px]" :init-page="state.page" :pagination-visible="true" pagination-color="#E11D48"
    auto-play="3000">
    <nut-swiper-item v-for="item in state.list" :key="item">
      <img :src="item" alt="" />
    </nut-swiper-item>
  </nut-swiper>
</template>