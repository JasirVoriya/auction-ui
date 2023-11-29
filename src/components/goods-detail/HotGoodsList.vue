<script setup lang="ts">
import { Goods } from '@/types'
defineProps<{
  goodsList: Goods[]
}>();
</script>
<template>
  <div class="flex items-end justify-between">
    <span class=" text-sm">当前热拍</span>
    <a href="#" class=" text-xs text-gray-500">换一批</a>
  </div>
  <div>
    <hot-goods-item :goods="goods" v-for="goods in goodsList" />
  </div>
</template>