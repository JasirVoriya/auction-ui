<template>
  <div>
    <div class="flex pl-10 items-center justify-center border border-gray-300 m-5">
      <div class="flex gap-4 p-10 mt-5">
        <div class="flex flex-col items-end text-gray-600">
          <span class="mb-2 font-semibold">账户余额：</span>
        </div>
        <div class="flex flex-col">
          <nut-price :price='useUserStore().userInfo.money'/>
        </div>
      </div>
    </div>
  </div>
</template>