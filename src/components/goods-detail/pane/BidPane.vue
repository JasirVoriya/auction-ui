<script setup lang="ts">
const props = defineProps({
  goods: {} as any,
})
const price = ref(props.goods.latestPrice+props.goods.increment)
const bit = () => {
  bidRecordApi.bid(props.goods.id,price.value).then(res=>{
    console.log(res)
    props.goods.latestPrice=res.price
    ElMessage.success('出价成功')
  })
}
</script>
<template>
  <div class="flex flex-col gap-1">
    <span class="text-sm font-bold text-gray-700 flex items-center justify-center">
      出价
      <nut-input-number button-size="25" input-width="100" :max="99999999999" :min="goods.latestPrice+goods.increment" v-model="price" :step="goods.increment" />
    </span>
    <button @click.prevent="bit"
      class=" w-72 h-14 bg-rose-500 text-xl font-semibold rounded-full border border-rose-200 text-white hover:bg-rose-600 hover:border-transparent active:outline-none active:ring-2 active:ring-rose-600 active:ring-offset-1">
      立即加价
    </button>
  </div>
</template>