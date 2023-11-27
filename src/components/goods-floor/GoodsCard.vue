<script setup lang="ts">
defineProps({
  goods: {
    type: Object,
    default: () => ({
      title: '「秒杀盛宴」未使用 Givenchy纪梵希 红丝绒N37朱砂红 佳琦推荐',
      price: 1000,
      status: '正在进行',
      cover: 'https://gw.alicdn.com/bao/uploaded/i4/O1CN01AfmyYw23zodPUjOf4_!!0-paimai.jpg_290x10000Q75.jpg_.webp',
      view: 100,
      info: [],
      time: '2021-10-10 10:10:10',
    })
  }
})
</script>
<template>
  <div class="rounded-xl border-rose-600 border-[1px] overflow-hidden bg-white bg-opacity-80">
    <img :src="goods.cover" class="object-cover" />
    <div class="pb-6">
      <p class=" p-2 text-sm truncate">{{ goods.title }}</p>
      <div class="flex flex-col px-3">
        <p>
          <span class="text-xs text-slate-500 pr-3">当前价</span>
          <nut-price :price="goods.price" :decimal-digits="2" thousands />
          <span class="text-xs text-slate-500">（{{goods.view}}次围观）</span>
        </p>
        <p>
          <span class="text-xs text-slate-500 pr-3">时&nbsp;&nbsp;&nbsp;间</span>
          <span class="text-xs text-slate-500">{{goods.time}}</span>
        </p>
      </div>
      <div class="w-full relative h-7">
          <span class="absolute bg-rose-600 text-white py-1 px-2 text-sm rounded-l-lg right-0">
            {{ goods.status }}
          </span>
        </div>
    </div>
  </div>
</template>