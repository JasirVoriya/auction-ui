<script setup lang="ts">

</script>
<template>
  <div class="w-screen h-9 bg-rose-600">
    <!-- ... -->
    <container-box class="pt-1 flex justify-between">
      <div class="flex">
        <slot name="left" />
      </div>
      <div class="flex">
        <slot name="right" />
      </div>
    </container-box>
  </div>
</template>