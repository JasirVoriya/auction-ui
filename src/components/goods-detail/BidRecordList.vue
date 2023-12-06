<script setup lang="ts">
const props=defineProps<{
  goodsId: string
}>();

const recordList=ref([])
const pageData = ref({
  current: 1,
  size: 10,
  pages:0,
  total: 0
});
const getBidRecord=()=>{
  bidRecordApi.getBidRecord(props.goodsId,pageData.value.current,pageData.value.size).then(res=>{
    recordList.value=res.records
    pageData.value.total=res.total
  })
}
getBidRecord()
const handleSizeChange = (val: number) => {
  pageData.value.size = val;
  getBidRecord();
};
const handleCurrentChange = (val: number) => {
  pageData.value.current = val;
  getBidRecord();
};
</script>
<template>
  <div>
    <span class=" text-sm">
      <span>出价记录</span>
      <span class=" text-xs text-gray-500">（{{ pageData.total }}）</span>
    </span>
    <div class="text-xs text-gray-500 flex flex-col gap-1">
      <div class="grid grid-cols-4 bg-gray-200 p-3">
        <span>状态</span>
        <span>竞拍人</span>
        <span>价格</span>
        <span>时间</span>
      </div>
      <div class="p-3 flex justify-center" v-if="recordList.length===0">
        <span>无人出价</span>
      </div>
      <div v-else class="p-3">
        <bid-record-list-item :record="record" v-for="record in recordList" />
      </div>
    </div>
    <div class="flex justify-center pt-3">
          <el-pagination
            v-model:current-page="pageData.current"
            v-model:page-size="pageData.size"
            :page-sizes="[10, 20, 30, 40, 50, 100]"
            small
            background
            layout="total, sizes, prev, pager, next, jumper"
            :total="pageData.total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
  </div>
</template>