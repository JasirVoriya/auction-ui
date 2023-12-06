<script setup lang="ts">
defineProps({
  status: Number,
  card: {
    type: Boolean,
    default: false
  }
});
</script>
<template>
  <template v-if="card">
    <span v-if="status == 1" class="absolute bg-gray-500 text-white py-1 px-2 text-sm rounded-l-lg right-0">
      即将开始
    </span>
    <span v-if="status == 2" class="absolute bg-rose-600 text-white py-1 px-2 text-sm rounded-l-lg right-0">
      正在进行
    </span>
    <span v-if="status == 3" class="absolute bg-yellow-600 text-white py-1 px-2 text-sm rounded-l-lg right-0">
      已结束
    </span>
  </template>
  <template v-else>
    <span v-if="status === 1" class="bg-gray-500 text-white py-1 px-3 text-sm rounded-r-full">
      即将开始
    </span>
    <span v-if="status === 2" class="bg-rose-600 text-white py-1 px-3 text-sm rounded-r-full">
      正在进行
    </span>
    <span v-if="status === 3" class="bg-yellow-600 text-white py-1 px-3 text-sm rounded-r-full">
      已结束
    </span>
  </template>
</template>