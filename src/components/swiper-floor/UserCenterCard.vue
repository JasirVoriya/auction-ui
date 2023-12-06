<script setup lang="ts">
import { My } from '@nutui/icons-vue-taro';
const helpList = reactive([
  {
    type: '参拍',
    link: '/help-center',
    name: '竞买流程'
  },
  {
    type: '报名',
    link: '/help-center',
    name: '交保证金'
  },
  {
    type: '规则',
    link: '/help-center',
    name: '出价规则'
  },
  {
    type: '保障',
    link: '/help-center',
    name: '假一赔三'
  }
]);
const bidGoodsRecord=ref({} as any)
participateApi.getUserAllBidGoodsNum().then(res=>{
  bidGoodsRecord.value=res
})
</script>
<template>
  <div class="w-full flex flex-col">
    <div class="flex gap-2 m-1 mb-3 justify-between">
      <div class="flex w-54">
        <nut-avatar size="normal" class=" overflow-hidden">
          <img v-if="useUserStore().userInfo.avatar" :src="useUserStore().userInfo.avatar" />
          <My v-else />
        </nut-avatar>
        <span class="text-rose-600 text-xs font-bold self-center p-1 truncate w-24">
          <span>{{ useUserStore().userInfo.username }}</span>
        </span>
      </div>
      <div class="flex items-end">
        <a href="/user-center" class="text-xs font-bold self-center w-16">
          <span>我的拍卖</span>
          <span class=" text-gray-300">&nbsp;&gt;</span>
        </a>
      </div>
    </div>
    <div class="flex bg-gray-100 rounded-xl border-[1px] px-1 py-3 gap-2 justify-center">
      <div class="flex flex-col justify-center items-center">
        <span class=" text-rose-600 font-bold text-xs">
          {{ bidGoodsRecord.unpaidNum }}
        </span>
        <span class=" text-gray-500 text-[10px]">待交保</span>
      </div>
      <div class="flex flex-col justify-center items-center">
        <span class=" text-rose-600 font-bold text-xs">
          {{ bidGoodsRecord.waitNum }}
        </span>
        <span class=" text-gray-500 text-[10px]">待开拍</span>
      </div>
      <div class="flex flex-col justify-center items-center">
        <span class=" text-rose-600 font-bold text-xs">
          {{ bidGoodsRecord.biddingNum }}
        </span>
        <span class=" text-gray-500 text-[10px]">竞价中</span>
      </div>
      <div class="flex flex-col justify-center items-center">
        <span class=" text-rose-600 font-bold text-xs">
          {{ bidGoodsRecord.endNum }}
        </span>
        <span class=" text-gray-500 text-[10px]">已结束</span>
      </div>
      <div class="flex flex-col justify-center items-center">
        <span class=" text-rose-600 font-bold text-xs">
          {{ bidGoodsRecord.successNum }}
        </span>
        <span class=" text-gray-500 text-[10px]">已拍下</span>
      </div>
    </div>
    <div class="w-full p-2 flex flex-col">
      <div class="flex justify-between">
        <router-link to="/help-center" class="text-sm hover:text-rose-600">竞买帮助</router-link>
        <router-link to="/help-center"
          class="text-xs pt-[2px] after:content-['>'] after:ml-0.5 after:text-slate-400 after:font-bold">更多</router-link>
      </div>
      <div class="grid grid-cols-2 gap-1 py-2 self-center">
        <a class="group" v-for="item in helpList" :key="item.type" :href="item.link">
          <span
            class="text-[10px] px-1 text-rose-600 rounded-full border border-rose-200 group-hover:text-white group-hover:bg-rose-600 group-hover:border-transparent">
            {{ item.type }}
          </span>
          <span class="text-xs px-1 text-slate-500 group-hover:text-rose-600">
            {{ item.name }}
          </span>
        </a>
      </div>
    </div>
  </div>
</template>