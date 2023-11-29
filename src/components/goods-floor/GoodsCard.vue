<script setup lang="ts">
import {Goods} from '@/types'
defineProps<{
  goods: Goods
}>();
</script>
<template>
  <router-link :to="goods.url">
    <div class="rounded-xl border-rose-600 border-[1px] overflow-hidden bg-white bg-opacity-80">
      <img :src="goods.cover" class="object-cover" />
      <div class="pb-6">
        <p class=" p-2 text-sm truncate">{{ goods.title }}</p>
        <div class="flex flex-col px-3">
          <p>
            <span class="text-xs text-slate-500 pr-3">当前价</span>
            <nut-price :price="goods.price" :decimal-digits="0" thousands />
            <span class="text-xs text-slate-500">（{{ goods.info.view }}次围观）</span>
          </p>
          <p>
            <span class="text-xs text-slate-500 pr-3">时&nbsp;&nbsp;&nbsp;间</span>
            <span class="text-xs text-slate-500">{{ goods.time }}</span>
          </p>
        </div>
        <div class="w-full relative h-7">
          <span class="absolute bg-rose-600 text-white py-1 px-2 text-sm rounded-l-lg right-0">
            {{ goods.status }}
          </span>
        </div>
      </div>
    </div>
  </router-link>
</template>