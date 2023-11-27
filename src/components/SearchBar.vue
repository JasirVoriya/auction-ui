<script setup lang="ts">
import { Search2} from '@nutui/icons-vue';
const value = ref('');
</script>
<template>
  <div class="w-screen h-9 border-b-2 border-rose-600">
    <container-box class="flex justify-between">
      <div class="flex">
        <slot />
      </div>
      <div class="flex border-2 border-rose-600 rounded-2xl">
        <Search2 class="text-gray-400 self-center ml-3"/>
        <input type="text" class="focus:ring-0 border-0 bg-transparent 
                    pl-1 w-40 h-6 
                  placeholder:text-slate-400 placeholder:text-sm 
                  text-black text-sm
                  caret-rose-600" placeholder="搜索"
                  v-model="value"/>
        <button class=" bg-rose-600 w-14 h-6 rounded-2xl text-white text-sm scale-[1.02]">搜索</button>
      </div>
    </container-box>
  </div>
</template>