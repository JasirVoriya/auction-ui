<script setup lang="ts">
import { BidRecord } from '@/types';

defineProps<{
  record: BidRecord
}>();
</script>
<template>
  <div class="group grid grid-cols-4 py-1">
    <div>
      <span
        class="block w-[34px] before:content-['淘汰'] bg-white box-border border-gray-200 border-[1px] px-1 rounded-sm
              group-first:before:content-['领先'] group-first:before:text-white group-first:bg-red-700 group-first:border-0" />
    </div>
    <div>
      <span class=" group-first:text-red-700 group-first:font-bold">{{ record.bidder }}</span>
    </div>
    <div>
      <nut-price :price='record.price' size="small" :decimal-digits="0"></nut-price>
    </div>
    <div>
      <span class=" group-first:text-red-700 group-first:font-bold">{{ record.time }}</span>
    </div>
  </div>
</template>