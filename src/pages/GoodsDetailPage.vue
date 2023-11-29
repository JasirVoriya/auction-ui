<script setup lang="ts">
import { Goods } from '@/types';
defineProps<{
  goodsId: string;
}>();
const goods = ref<Goods>({
  title: '「秒杀盛宴」未使用 Givenchy纪梵希 红丝绒N37朱砂红 佳琦推荐',
  price: 1000,
  status: '正在进行',
  cover: 'https://gw.alicdn.com/bao/uploaded/i4/O1CN01AfmyYw23zodPUjOf4_!!0-paimai.jpg_290x10000Q75.jpg_.webp',
  url: '/rare-goods/13215432',
  info: {
    assetType: '民间资产',
    company: '上海拍卖行',
    view: 134,// 围观人数
    registration: 43,
    startingPrice: 1, // 起拍价
    commission: 0, // 佣金
    increment: 100, // 加价幅度
    deposit: 20, // 保证金
    extensionPeriod: 0, // 延期周期
    bidRecord: [
      {
        bidder: 'C1234',
        price: 1000,
      },
      {
        bidder: 'C1434',
        price: 900,
      },
      {
        bidder: 'C1534',
        price: 800,
      }
    ]
  },
  time: '2021-10-10 10:10:10',
});
const end = ref(Date.now() + 60 * 60 * 1000);
const resetTime = ref({
  d: '0',
  h: '00',
  m: '00',
  s: '00',
  ms: '00'
});
const tabIndex = ref('0');
</script>
<template>
  <container-box>
    <div class="py-4">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/rare-goods' }">珍贵好物</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">个性化妆</a></el-breadcrumb-item>
        <el-breadcrumb-item>{{ goodsId }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="grid grid-cols-5 gap-0 items-start">
      <div class="col-span-4 border-gray-200 border-[1px] border-r-0">
        <div class="grid grid-cols-9 gap-0 p-2 pr-0 border-gray-200 border-b-[1px]">
          <div class="col-span-4 flex flex-col justify-start">
            <img :src="goods.cover" class="object-contain" />
          </div>
          <div class="col-span-5">
            <div class=" pl-3">
              <p class=" text-sm font-semibold">{{ goods.title }}</p>
              <div class="py-3">
                <span class="bg-rose-600 text-white py-1 px-3 text-sm rounded-r-full">
                  {{ goods.status }}
                </span>
                <nut-countdown v-model="resetTime" :end-time="end">
                  <span class=" text-sm">
                    距离结束还剩：
                    <span class=" text-red-600 text-2xl">{{ String(resetTime.d).padStart(2,'0')}}</span>天
                    <span class=" text-red-600 text-2xl">{{ String(resetTime.h).padStart(2,'0') }}</span>时
                    <span class=" text-red-600 text-2xl">{{ String(resetTime.m).padStart(2,'0') }}</span>分
                    <span class=" text-red-600 text-2xl">{{ String(resetTime.s).padStart(2,'0') }}</span>秒
                    <span class=" text-red-600 text-2xl">{{ String(resetTime.ms).padStart(3, '0')[0] }}</span>
                  </span>
                </nut-countdown>
              </div>
              <div class="bg-gray-100 rounded-l-xl py-5 pl-7 flex items-start flex-col gap-5">
                <span class=" text-xs text-gray-500">
                  当前价
                  <nut-price class="px-2 font-semibold" size="large" :price="goods.price" :decimal-digits="0" thousands />
                  （<span class="text-xs text-rose-600 font-semibold">{{goods.info.bidRecord.length}}</span>次出价）
                </span>
                <span class=" text-xs text-gray-500">
                  保证金
                  <nut-price class="px-2 font-semibold" size="large" :price="goods.info.deposit" :decimal-digits="0"
                    thousands />
                </span>
                <button
                  class=" w-72 h-14 bg-rose-500 text-xl font-semibold rounded-full border border-rose-200 text-white hover:bg-rose-600 hover:border-transparent active:outline-none active:ring-2 active:ring-rose-600 active:ring-offset-1">
                  报名交保证金
                </button>
                <div class="flex gap-8">
                  <button
                    class="w-32 h-14 bg-rose-500 text-xl font-semibold rounded-full border border-rose-200 text-white hover:bg-rose-600 hover:border-transparent active:outline-none active:ring-2 active:ring-rose-600 active:ring-offset-1">
                    立即出价
                  </button>
                  <button
                    class="w-32 h-14 bg-gray-300 text-xl font-semibold rounded-full border border-gray-200 text-gray-500 hover:bg-gray-400 hover:border-transparent active:outline-none active:ring-2 active:ring-gray-300 active:ring-offset-1">
                    加入收藏
                  </button>
                </div>
              </div>
              <div class="m-3 flex justify-between items-end">
                <span class="text-xl font-bold">
                  {{ goods.info.assetType }}
                </span>
                <div class="text-gray-500 text-sm flex divide-x">
                  <span class="pr-3">
                    <span class=" text-xl text-orange-500">{{ goods.info.registration }}</span>
                    人报名
                  </span>
                  <span class="pl-3">
                    <span class=" text-xl text-orange-500">{{ goods.info.view }}</span>
                    人围观
                  </span>
                </div>
              </div>
              <div class="columns-3 text-gray-500 text-xs leading-5 border-gray-300 border-y-[1px] py-1">
                <p>起拍价：￥{{ goods.info.startingPrice }}</p>
                <p>佣&nbsp;&nbsp;&nbsp;金：￥{{ goods.info.commission }}</p>
                <p>加价幅度：￥{{ goods.info.increment }}</p>
                <p>延时周期：{{ goods.info.extensionPeriod !== 0 ? goods.info.extensionPeriod : '无' }}</p>
                <p>保证金：￥{{ goods.info.deposit }}</p>
              </div>
              <div class="flex flex-col gap-1 py-2 text-gray-500 text-xs">
                <span>
                  <span>送拍机构：</span>
                  <span class="pr-2">{{ goods.info.company }}</span>
                  <button @click="tabIndex = '2'"
                    class=" bg-yellow-200 text-red-500 rounded-sm py-[1px] px-1">和我联系</button>
                </span>
                <div>
                  <span>特色服务：</span>
                  <span class=" text-yellow-300">
                    <span
                      class="mr-2 bg-red-500 py-[1px] px-1 rounded-sm before:content-['√'] before:font-bold before:text-sm">无忧送检</span>
                    <span
                      class="mr-2 bg-red-500 py-[1px] px-1 rounded-sm before:content-['√'] before:font-bold before:text-sm">6道严审</span>
                    <span
                      class="mr-2 bg-red-500 py-[1px] px-1 rounded-sm before:content-['√'] before:font-bold before:text-sm">假一赔三</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="flex mt-5">
            <span class=" text-xl font-bold px-5">竞拍流程</span>
            <nut-steps current="0" class="w-4/5">
              <nut-step title="交保证金" />
              <nut-step title="出价竞拍" />
              <nut-step title="竞拍成功" />
              <nut-step title="支付货款" />
              <nut-step title="完成收货" />
            </nut-steps>
          </div>
          <nut-tabs v-model="tabIndex">
            <nut-tab-pane title="拍品描述" pane-key="0">
              拍品描述
            </nut-tab-pane>
            <nut-tab-pane :title="'出价记录（' + goods.info.bidRecord.length + '）'" pane-key="1">
              出价记录
            </nut-tab-pane>
            <nut-tab-pane title="服务保障" pane-key="2">
              服务保障
            </nut-tab-pane>
            <nut-tab-pane title="保证金须知" pane-key="3">
              保证金须知
            </nut-tab-pane>
          </nut-tabs>
        </div>
      </div>
      <div class="col-span-1">
        <div class="bg-gray-100">
          <div class="p-3 border-gray-200 border-[1px] border-l-0">
            <bid-record-list :bid-record="goods.info.bidRecord" />
            <button @click="tabIndex='1'" class=" text-xs">查看更多></button>
          </div>
          <div class="p-2">
            <hot-goods-list :goods-list="[goods, goods, goods, goods]" />
          </div>
        </div>
      </div>
    </div>
  </container-box>
</template>