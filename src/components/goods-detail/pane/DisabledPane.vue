<script setup lang="ts">
defineProps({
  title:String
})
</script>
<template>
  <div class="flex flex-col gap-1">
    <button
      class="w-72 h-14 cursor-not-allowed bg-gray-500 text-xl font-semibold rounded-full border border-rose-200 text-white">
      {{ title }}
    </button>
  </div>
</template>