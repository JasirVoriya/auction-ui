<script setup lang="ts">
import * as utils from '@/plugins/utils';
import "@wangeditor/editor/dist/css/style.css";
import { Editor } from '@wangeditor/editor-for-vue';
const props = defineProps<{
  goodsId: string;
}>();
const goods = ref({} as any);
const participateInfo = ref(null as any);
const bidRecorTotal = ref(0)
bidRecordApi.getBidRecord(props.goodsId, 1, 1).then(res => bidRecorTotal.value = res.total)
const countdownTime = ref<number>(0);
//获取商品信息
goodsApi.getGoods(props.goodsId).then(res => {
  goods.value = res;
  if (res.status === 1) countdownTime.value = utils.parseDateString(goods.value.startTime)?.getTime() as number;
  else if (res.status === 2) countdownTime.value = utils.parseDateString(goods.value.endTime)?.getTime() as number;
});
//获取参拍信息
participateApi.getParticipateBidInfo(props.goodsId).then(res => {
  participateInfo.value = res;
});
const resetTime = ref({
  d: '0',
  h: '00',
  m: '00',
  s: '00',
  ms: '00'
});
const tabIndex = ref('0');

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();
const editorConfig = {
  readOnly: true,
  scroll: false
};
const handleCreated = editor => {
  // 记录 editor 实例，重要！
  editorRef.value = editor;
};
// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});
</script>
<template>
  <container-box>
    <div class="py-4">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: goods.goodsType==='珍贵好物'?'/rare-goods':'/judicial' }">{{ goods.goodsType }}</el-breadcrumb-item>
        <el-breadcrumb-item v-for="name in goods.categoryNames">{{ name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="grid grid-cols-5 gap-0 items-start">
      <div class="col-span-4 border-gray-200 border-[1px] border-r-0">
        <div class="grid grid-cols-9 gap-0 p-2 pr-0 border-gray-200 border-b-[1px]">
          <div class="col-span-4 flex flex-col justify-start">
            <img :src="goods.cover" class="object-cover aspect-1" />
          </div>
          <div class="col-span-5">
            <div class=" pl-3">
              <p class=" text-sm font-semibold">{{ goods.name }}</p>
              <div class="py-3">
                <goods-status :status="goods.status" />
                <nut-countdown v-model="resetTime" :end-time="countdownTime">
                  <span class="text-2xl" :class="goods.status === 1 ? 'text-gray-500' : 'text-rose-600'">
                    <span class="text-sm text-black">
                      {{ goods.status === 1 ? '距离开始还有：' : goods.status === 2 ? '距离结束还剩：' : '拍卖已结束' }}
                    </span>
                    {{ String(resetTime.d).padStart(2, '0') }}<span class="text-sm text-black">天</span>
                    {{ String(resetTime.h).padStart(2, '0') }}<span class="text-sm text-black">时</span>
                    {{ String(resetTime.m).padStart(2, '0') }}<span class="text-sm text-black">分</span>
                    {{ String(resetTime.s).padStart(2, '0') }}<span class="text-sm text-black">秒</span>
                    {{ String(resetTime.ms).padStart(3, '0')[0] }}
                  </span>
                </nut-countdown>
              </div>
              <div class="bg-gray-100 rounded-l-xl py-5 pl-7 flex items-start flex-col gap-5">
                <span class=" text-xs text-gray-500">
                  当前价
                  <nut-price class="px-2 font-semibold" size="large" :price="goods.latestPrice" :decimal-digits="0"
                    thousands />
                  （<span class="text-xs text-rose-600 font-semibold">{{ bidRecorTotal }}</span>次出价）
                </span>
                <!-- 已结束 -->
                <disabled-pane v-if="goods.status===3" title="拍卖已结束" />
                <!-- 未报名 -->
                <pay-deposit-pane v-else-if="participateInfo === null" :goods="goods" title="报名交保证金" />
                <!-- 已报名，未缴费 -->
                <pay-deposit-pane v-else-if="participateInfo.deposit === false" :goods="goods" title="已报名，立即缴费" />
                <!-- 已报名，已缴费，待开拍 -->
                <disabled-pane v-else-if="goods.status === 1" title="参拍成功，请等待开拍" />
                <!-- 已报名，已缴费，已开拍 -->
                <bid-pane v-else-if="goods.status === 2" :goods="goods" />
              </div>
              <div class="m-3 flex justify-between items-end">
                <span class="text-xl font-bold">
                  {{ goods.goodsType }}
                </span>
                <div class="text-gray-500 text-sm flex divide-x">
                  <span class="pr-3">
                    <span class=" text-xl text-orange-500">{{ goods.registration }}</span>
                    人报名
                  </span>
                  <span class="pl-3">
                    <span class=" text-xl text-orange-500">{{ goods.view }}</span>
                    人围观
                  </span>
                </div>
              </div>
              <div class="columns-3 text-gray-500 text-xs leading-5 border-gray-300 border-y-[1px] py-1">
                <p>起拍价：￥{{ goods.startingPrice }}</p>
                <p>加价幅度：￥{{ goods.increment }}</p>
                <p>保证金：￥{{ goods.deposit }}</p>
              </div>
              <div class="flex flex-col gap-1 py-2 text-gray-500 text-xs">
                <span>
                  <span>送拍机构：</span>
                  <span class="pr-2">{{ goods.sellerName }}</span>
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
              <Editor v-model="goods.intro" :defaultConfig="editorConfig" style="overflow-y: hidden"
                @onCreated="handleCreated" />
            </nut-tab-pane>
            <nut-tab-pane :title="'出价记录（' + bidRecorTotal + '）'" pane-key="1">
              <bid-record-list :goods-id="goodsId" />
            </nut-tab-pane>
            <nut-tab-pane title="服务保障" pane-key="2">
              <service-guarantee/>
            </nut-tab-pane>
            <nut-tab-pane title="保证金须知" pane-key="3">
              <margin-requirements/>
            </nut-tab-pane>
          </nut-tabs>
        </div>
      </div>
      <div class="col-span-1">
        <div class="bg-gray-100">
          <div class="p-3 border-gray-200 border-[1px] border-l-0">
            <bid-record-card :goods-id="goodsId" />
            <button @click="tabIndex = '1'" class=" text-xs">查看更多></button>
          </div>
          <div class="p-2">
            <hot-goods-list :goods-list="[goods, goods, goods, goods]" />
          </div>
        </div>
      </div>
    </div>
  </container-box>
</template>