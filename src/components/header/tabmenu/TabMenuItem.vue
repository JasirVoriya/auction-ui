<script setup lang="ts">
// 给个默认值
defineProps({
  active: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  src: {
    type: String,
    default: ''
  },
  hoverSrc: {
    type: String,
    default: ''
  },
  to: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <div class="group">
    <span class="group-first:hidden absolute top-3 w-[1px] h-[10px] bg-white" />
    <div class="h-8 px-1">
      <div class="h-8 rounded-t-xl" :class="{ 'bg-white': active }">
        <router-link :to="to" class="block group/content hover:bg-white cursor-pointer rounded-2xl">
          <div class="h-6 inline-block px-1" :class="{ 'hidden': src === '' }">
            <img class="h-6 group-hover/content:hidden" :src="src" :class="active?'hidden':'inline-block'" />
            <img class="h-6 group-hover/content:inline-block" :src="hoverSrc" :class="!active?'hidden':'inline-block'"  />
          </div>
          <span class="inline-block
                      h-6 pt-1 pr-1
                      text-xs font-bold
                    group-hover/content:text-rose-600" :class="active ? 'text-rose-600' : 'text-white'">
            {{ title }}
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>
