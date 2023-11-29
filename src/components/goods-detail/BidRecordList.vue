<script setup lang="ts">
defineProps<{
  bidRecord: {
    bidder: string;
    price: number;
  }[]
}>();
</script>
<template>
  <div>
    <span class=" text-sm">
      <span>出价记录</span>
      <span class=" text-xs text-gray-500">（{{ bidRecord.length }}）</span>
    </span>
    <div class="text-xs text-gray-500 flex flex-col gap-1">
      <div class="grid grid-cols-3">
        <span>状态</span>
        <span>竞拍人</span>
        <span>价格</span>
      </div>
      <div>
        <bid-record-item :record="record" v-for="record in bidRecord" />
      </div>
    </div>
  </div>
</template>