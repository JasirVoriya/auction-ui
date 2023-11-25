<template>
  <div class="w-screen h-6 bg-white">
    <!-- ... -->
    <container-box class="h-6 pt-1 flex justify-between">
      <div class="flex">
        <slot name="left" />
      </div>
      <div class="flex">
        <slot name="right" />
      </div>
    </container-box>
  </div>
</template>