<template>
  <container-box>
    <div class="grid grid-cols-4 gap-2 py-2">
      <div class=" col-span-3">
        <span>猜你喜欢</span>
      </div>
      <div>
        <span>每日发现</span>
      </div>
    </div>
    <div class="grid grid-cols-4 gap-1 py-2">
      <div class="col-span-3">
        <div class="grid grid-cols-3 gap-2">
          <goods-card v-for="_ in 10" />
        </div>
      </div>
      <div>
        <div class="grid grid-cols-1 gap-1 border-[1px] p-2 rounded-xl border-gray-300">
          <goods-item v-for="_ in 10" />
        </div>
      </div>
    </div>
  </container-box>
</template>