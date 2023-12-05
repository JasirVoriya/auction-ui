<script setup lang="ts">
import * as utils from '@/plugins/utils';
const props = defineProps({
  goods: {} as any
});
const currentDate = new Date();
const startTime = utils.parseDateString(props.goods.startTime);
const endTime = utils.parseDateString(props.goods.endTime);
const status = ref(1);

const isStart = startTime ? currentDate.getTime() >= startTime.getTime() : false;
const isEnd = endTime ? currentDate.getTime() >= endTime.getTime() : false;
if (isStart && !isEnd) {
  status.value = 2;
} else if (isEnd) {
  status.value = 3;
}
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
            <span class="text-xs text-slate-500 pr-3">当前价</span>
            <nut-price :price="goods.latestPrice" :decimal-digits="0" thousands />
            <span class="text-xs text-slate-500">（{{ goods.view }}次围观）</span>
          </p>
          <p>
            <span class="text-xs text-slate-500 pr-3">时&nbsp;&nbsp;&nbsp;间</span>
            <span class="text-xs text-slate-500">{{ goods.startTime }}</span>
          </p>
        </div>
        <div class="w-full relative h-7">
          <span v-if="status == 1" class="absolute bg-green-600 text-white py-1 px-2 text-sm rounded-l-lg right-0">
            即将开始
          </span>
          <span v-if="status == 2" class="absolute bg-rose-600 text-white py-1 px-2 text-sm rounded-l-lg right-0">
            正在进行
          </span>
          <span v-if="status == 3" class="absolute bg-yellow-600 text-white py-1 px-2 text-sm rounded-l-lg right-0">
            已结束
          </span>
        </div>
      </div>
    </div>
  </router-link>
</template>