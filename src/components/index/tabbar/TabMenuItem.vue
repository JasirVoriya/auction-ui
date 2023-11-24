<script setup lang="ts">

</script>
<template>
  <div class="group">
    <span class="group-first:hidden absolute top-3 w-[1px] h-[10px] bg-white" />
    <div class="h-8 px-1">
      <div class="h-8 active:bg-white rounded-t-xl">
        <span class="inline-block
                    h-6 pt-1 px-2
                    text-xs font-bold text-white
                    hover:text-rose-600 hover:bg-white 
                    hover:cursor-pointer  hover:rounded-2xl ">
          <slot />
        </span>
      </div>
    </div>
  </div>
</template>