<script setup lang="ts">
const props=defineProps<{
  goodsId: string
}>();

const recordList=ref([])
const pageData = ref({
  current: 1,
  size: 3,
  pages:0,
  total: 0
});
bidRecordApi.getBidRecord(props.goodsId,pageData.value.current,pageData.value.size).then(res=>{
  console.log(res)
  recordList.value=res.records
  pageData.value.total=res.total
})
</script>
<template>
  <div>
    <span class=" text-sm">
      <span>出价记录</span>
      <span class=" text-xs text-gray-500">（{{ pageData.total }}）</span>
    </span>
    <div class="text-xs text-gray-500 flex flex-col gap-1">
      <div class="grid grid-cols-3">
        <span>状态</span>
        <span>竞拍人</span>
        <span>价格</span>
      </div>
      <div v-if="recordList.length===0" class="flex justify-center p-3 text-gray-400">
        <span>
          无人出价
        </span>
      </div>
      <div v-else>
        <bid-record-item :record="record" v-for="record in recordList" />
      </div>
    </div>
  </div>
</template>