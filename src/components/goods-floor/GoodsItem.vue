<script setup lang="ts">
const goods = reactive({
  title: '「秒杀盛宴」未使用 Givenchy纪梵希 红丝绒N37朱砂红 佳琦推荐',
  price: 1000,
  status: '正在进行',
  cover: 'https://gw.alicdn.com/bao/uploaded/i4/O1CN01AfmyYw23zodPUjOf4_!!0-paimai.jpg_290x10000Q75.jpg_.webp',
  view: 100,
  info: [],
  time: '2021-10-10 10:10:10',
})
</script>
<template>
  <div class=" rounded-xl overflow-hidden bg-white bg-opacity-80">
    <div class="grid grid-cols-5 h-20">
      <div class="col-span-2">
        <img :src="goods.cover" class="object-cover h-20 w-full" />
      </div>
      <div class="col-span-3 p-2">
        <p class="text-xs line-clamp-2">{{ goods.title }}</p>
        <p>
          <span class="text-xs text-slate-500 pr-2">起拍价</span>
          <nut-price size="small" :price="goods.price" :decimal-digits="2" thousands />
        </p>
      </div>
    </div>

  </div>
</template>