<script setup lang="ts">
defineProps<{record: any}>();
</script>
<template>
  <div class="group grid grid-cols-3">
    <div>
      <span
        class="block w-[34px] before:content-['淘汰'] bg-white box-border border-gray-200 border-[1px] px-1 rounded-sm
                group-first:before:content-['领先'] group-first:before:text-white group-first:bg-red-700 group-first:border-0" />
    </div>
    <div>
      <span class=" inline-block w-14 group-first:text-red-700 group-first:font-bold truncate">
        {{ record.bidderId }}
      </span>
    </div>
    <div>
      <nut-price :price='record.price' size="small" :decimal-digits="0"></nut-price>
    </div>
  </div>
</template>