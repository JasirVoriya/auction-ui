<script setup lang="ts">
const props = defineProps({
  goods: {} as any
});
const detailUrl = ref('');
if (props.goods.goodsType == '司法资产') {
  detailUrl.value = `/judicial/${props.goods.id}`;
} else if (props.goods.goodsType == '民间珍品') {
  detailUrl.value = `/rare-goods/${props.goods.id}`;
}
</script>
<template>
  <router-link :to="detailUrl">
    <div class="rounded-xl border-rose-600 border-[1px] overflow-hidden bg-white bg-opacity-80">
      <img :src="goods.cover" class="object-cover" />
      <div class="pb-6">
        <p class=" p-2 text-sm truncate">{{ goods.name }}</p>
        <div class="flex flex-col px-3">
          <p>
            <span class="text-xs text-slate-500 pr-3">当&nbsp;&nbsp;前&nbsp;&nbsp;价</span>
            <nut-price :price="goods.latestPrice" :decimal-digits="0" thousands />
            <span class="text-xs text-slate-500">（{{ goods.view }}次围观）</span>
          </p>
          <p>
            <span class="text-xs text-slate-500 pr-3">开始时间</span>
            <span class="text-xs text-slate-500">{{ goods.startTime }}</span>
          </p>
        </div>
        <div class="w-full relative h-7">
          <p class=" absolute px-3 bg-rose-600 rounded-r-lg">
            <span class="text-xs text-white font-bold pr-3">{{ goods.goodsType }}</span>
          </p>
          <goods-status :status="goods.status" card />
        </div>
      </div>
    </div>
  </router-link>
</template>