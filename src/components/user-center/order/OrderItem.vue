<script setup lang="ts">
const cover = 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1695211669.21787750.png'
</script>
<template>
  <div class="flex flex-col border-gray-400 border-[1px]">
    <div class="flex justify-between px-10 py-5">
      <div>
        <div class=" text-gray-300 text-2xl font-light">
          <span>已收货</span>
        </div>
        <div class="text-gray-500 text-sm font-light flex divide-x pt-2">
          <span class="px-3 pl-0">2023-12-3 21:10:10</span>
          <span class="px-3">伍学明</span>
          <span class="px-3">订单号：123456789</span>
          <span class="px-3">在线支付</span>
        </div>
      </div>
      <div class="flex justify-end items-end text-gray-500 text-sm font-light">
        <span>实付金额：</span>
        <span class=" text-gray-700 text-2xl px-1 font-bold">2199.00</span>
        <span>元</span>
      </div>
    </div>
    <div class="flex justify-between border-t-[1px]">
      <div class="flex px-10 py-5 gap-5">
        <img :src="cover" class=" w-24 h-24 object-contain" />
        <div>
          <div class=" text-gray-900 text-sm font-bold">
            <span>Redmi Note 13 Pro+</span>
          </div>
          <div class=" text-gray-500 text-sm font-light flex divide-x pt-2">
            <span class="px-3">颜色：陶瓷白</span>
            <span class="px-3">版本：16+512G</span>
            <span class="px-3">数量：1</span>
          </div>
        </div>
      </div>
      <div class="flex flex-col text-gray-500 font-light text-xs gap-2 w-64 items-center justify-center">
        <button class=" border-[1px] border-gray-500 py-1 px-6">订单详情</button>
        <button class=" border-[1px] border-gray-500 py-1 px-6">申请售后</button>
        <button class=" border-[1px] border-gray-500 py-1 px-6">联系客服</button>
      </div>
    </div>
  </div>
</template>