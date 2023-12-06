<script setup lang="ts">
const props=defineProps({
  goods: {} as any,
  title: String,
})
const show = ref(false)
const showParticipate = () => {
  show.value = true
}
const participate = () => {
  participateApi.participate(props.goods.id).then(() => {
    show.value = false
    ElMessage.success('报名并支付成功')
  })
}
</script>
<template>
  <nut-dialog teleport="#app" v-model:visible="show" @ok="participate">
    <template #header>
      <span class="text-rose-600 font-bold">保证金缴纳
      </span>
    </template>
    <template #default>
      <span>
        <span>您将报名本次拍卖，并缴纳</span>
        <span class="text-xl text-rose-600">{{ goods.deposit }}元</span>
        <span>作为参拍保证金？</span>
      </span>
    </template>
  </nut-dialog>
  <div class="flex flex-col gap-1">
    <span class=" text-xs text-gray-500">
      保证金
      <nut-price class="px-2 font-semibold" size="large" :price="goods.deposit" :decimal-digits="0" thousands />
    </span>
    <button @click.prevent="showParticipate"
      class=" w-72 h-14 bg-rose-500 text-xl font-semibold rounded-full border border-rose-200 text-white hover:bg-rose-600 hover:border-transparent active:outline-none active:ring-2 active:ring-rose-600 active:ring-offset-1">
      {{ title }}
    </button>
  </div>
</template>