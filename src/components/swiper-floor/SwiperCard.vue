<script setup lang="ts">
const state = reactive({
  page: 2,
  list: [
    'https://gw.alicdn.com/imgextra/i3/O1CN01DiHswr20NOgEMygcC_!!6000000006837-2-tps-1316-736.png_620x10000.jpg_.webp',
    'https://gw.alicdn.com/imgextra/i3/O1CN01SQr5DM1IXA24UhROb_!!6000000000902-2-tps-1300-664.png_620x10000.jpg_.webp',
    'https://gw.alicdn.com/imgextra/i1/O1CN01XIuWOh26tM0hwAs5X_!!6000000007719-0-tps-1316-736.jpg_620x10000Q75.jpg_.webp',
    'https://gw.alicdn.com/imgextra/i1/O1CN01lPH0C2258LppHZ4zd_!!6000000007481-0-tps-1300-664.jpg_620x10000Q75.jpg_.webp',
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
      <img :src="item" class="object-cover w-[500px]" />
    </nut-swiper-item>
  </nut-swiper>
</template>