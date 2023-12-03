<script setup lang="ts">
const tagIndex = ref('0');
</script>
<template>
  <div class="w-screen h-screen">
    <div class="w-screen h-[100px] bg-rose-500 flex items-center">
      <ContainerBox class="flex items-center justify-between">
        <a href="/">
          <img src="@/assets/svg/hammer.svg" class="w-20 h-20" />
        </a>
        <span class="text-white text-2xl font-semibold">拍卖平台</span>
      </ContainerBox>
    </div>

    <div class="h-full flex items-center justify-center">
      <div class=" w-full h-full">
        <nut-tabs class="h-full" v-model="tagIndex" title-scroll direction="vertical">
          <nut-tab-pane pane-key="0" title="个人中心">
            <profile />
          </nut-tab-pane>
          <nut-tab-pane pane-key="1" title="账号设置">
            <account-settings />
          </nut-tab-pane>
        </nut-tabs>
      </div>
    </div>
  </div>
</template>