<script setup lang="ts">
const props = defineProps({ getGidGoodsRecordList: Function })
const pageData = ref({
  current: 1,
  size: 10,
  pages: 0,
  total: 0
});
const recordList = ref([])
const getBidRecord = () => {
  if (!props.getGidGoodsRecordList) return
  props.getGidGoodsRecordList(pageData.value.current, pageData.value.size).then((res: {
    records: never[];
    total: number;
    pages: number;
  }) => {
    recordList.value = res.records
    pageData.value.total = res.total
    pageData.value.pages = res.pages
    console.log(res.records)
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
  <div class="flex flex-col items-center">
    <div class="flex flex-col gap-4 mb-5">
      <div class="h-64 flex items-center" v-if="recordList.length===0">
        <span class="text-2xl text-gray-500">
          空空如也
        </span>
      </div>
      <order-item :record="record" v-for="record in recordList" />
    </div>
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
</template>