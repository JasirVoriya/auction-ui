<script setup lang="ts">
const props = defineProps({ record: {} as any })
const statusTitle: any[] = []
statusTitle[1] = '待交保'
statusTitle[2] = '待开拍'
statusTitle[3] = '竞拍中'
statusTitle[4] = '已结束'
statusTitle[5] = '已拍下'
const detailUrl = ref('');
if (props.record.goodsType == '司法资产') {
  detailUrl.value = `/judicial/${props.record.goodsId}`;
} else if (props.record.goodsType == '民间珍品') {
  detailUrl.value = `/rare-goods/${props.record.goodsId}`;
}
const show = ref(false)
const showPay = () => {
  show.value = true
}
const pay = () => {
  payApi.pay(props.record.goodsId).then(() => {
    show.value = false
    ElMessage.success('支付成功')
  })
}
</script>
<template>
  <nut-dialog teleport="#app" v-model:visible="show" @ok="pay">
    <template #header>
      <span class="text-rose-600 font-bold">支付
      </span>
    </template>
    <template #default>
      <span>
        <span>恭喜您成功拿下该拍品，请立即支付</span>
        <span class="text-xl text-rose-600">{{ record.goodsLatestPrice }}元</span>
      </span>
    </template>
  </nut-dialog>
  <div class="flex flex-col border-gray-400 border-[1px]">
    <div class="flex justify-between px-10 py-5">
      <div>
        <div class=" text-gray-300 text-2xl font-light">
          <span>
            {{ statusTitle[record.status] }}
            <span v-if="record.status===5">{{ record.pay?'（已付款）':'（未付款）' }}</span>
          </span>
        </div>
        <div class="text-gray-500 text-sm font-light flex divide-x pt-2">
          <span class="px-3 pl-0">{{ record.latestTime }}</span>
          <span class="px-3">{{ record.bidderName }}</span>
          <span class="px-3">单号：{{ record.participatorId }}</span>
        </div>
      </div>
      <div class="flex justify-end items-end text-gray-500 text-sm font-light">
        <span>您的出价：</span>
        <span class=" text-gray-700 text-2xl px-1 font-bold">
          {{ record.badderLatestPrice }}
        </span>
        <span>元</span>
      </div>
    </div>
    <div class="flex justify-between border-t-[1px]">
      <div class="flex px-10 py-5 gap-5">
        <img :src="record.goodsCover" class=" w-24 h-24 object-contain" />
        <div>
          <div class=" text-gray-900 text-sm font-bold">
            <span>{{ record.goodsName }}</span>
          </div>
          <div class=" text-gray-500 text-sm font-light flex divide-x pt-2">
            <span class="px-3">拍卖机构：{{ record.sellerName }}</span>
            <span class="px-3">当前价：{{ record.goodsLatestPrice }}元</span>
          </div>
        </div>
      </div>
      <div class="flex flex-col text-gray-500 font-light text-xs gap-2 w-64 items-center justify-center">
        <router-link :to="detailUrl" class=" border-[1px] border-gray-500 py-1 px-6">商品详情</router-link>
        <button @click.prevent="showPay" v-if="record.status===5&&!record.pay" class=" border-[1px] border-gray-500 py-1 px-6">立即支付</button>
      </div>
    </div>
  </div>
</template>