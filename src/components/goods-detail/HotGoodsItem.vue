<script setup lang="ts">
const props = defineProps({
  goods: {} as any
});
const bidRecorTotal = ref(0)
bidRecordApi.getBidRecord(props.goods.id, 1, 1).then(res => bidRecorTotal.value = res.total)
</script>
<template>
  <div class="bg-white my-4">
    <div class="relative">
      <a href="#">
        <img :src="goods.cover" class=" object-cover aspect-1" />
        <span class="absolute bottom-0 left-0 bg-gray-300 w-full truncate text-center text-xs py-1 hover:text-rose-600">
          {{ goods.name }}
        </span>
      </a>
    </div>
    <div class="flex justify-between items-center p-2 text-[10px] text-gray-500">
      <div>
        <span>当前价&nbsp;</span>
        <nut-price :price="goods.price" size="small" :decimal-digits="0"></nut-price>
      </div>
      <div>
        <span>出价</span>
        <span class=" text-rose-600 font-bold px-1">{{ bidRecorTotal }}</span>
        <span>次</span>
      </div>
    </div>
  </div>
</template>