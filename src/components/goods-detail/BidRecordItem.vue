<script setup lang="ts">
defineProps<{
  record: {
    bidder: string;
    price: number;
  }
}>();
</script>
<template>
  <div class="group grid grid-cols-3">
    <div>
      <span
        class="block w-[34px] before:content-['淘汰'] bg-white box-border border-gray-200 border-[1px] px-1 rounded-sm
                group-first:before:content-['领先'] group-first:before:text-white group-first:bg-red-700 group-first:border-0" />
    </div>
    <div>
      <span>{{ record.bidder }}</span>
    </div>
    <div>
      <nut-price :price='record.price' size="small" :decimal-digits="0"></nut-price>
    </div>
  </div>
</template>