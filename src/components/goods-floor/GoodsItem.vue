<script setup lang="ts">
import {Goods} from '@/types'
defineProps<{
  goods: Goods
}>();
</script>
<template>
  <div class=" rounded-xl overflow-hidden bg-white bg-opacity-80">
    <div class="grid grid-cols-5 h-20">
      <div class="col-span-2">
        <img :src="goods.cover" class="object-cover h-20 w-full" />
      </div>
      <div class="col-span-3 p-2">
        <p class="text-xs line-clamp-2">{{ goods.title }}</p>
        <p>
          <span class="text-xs text-slate-500 pr-2">起拍价</span>
          <nut-price size="small" :price="goods.price" :decimal-digits="0" thousands />
        </p>
      </div>
    </div>

  </div>
</template>