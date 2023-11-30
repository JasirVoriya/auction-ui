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
    <div class="h-3/5 flex items-center justify-center">
      <div class="w-96 h-96 rounded-xl overflow-hidden border-rose-600 border-2">
        <nut-tabs v-model="tagIndex" type="smile">
          <nut-tab-pane title="密码登录" pane-key="0" style=" background-color: rgba(0,0,0,0);">
            <password-login-form/>
          </nut-tab-pane>
          <nut-tab-pane title="验证码登录" pane-key="1" style=" background-color: rgba(0,0,0,0);">
            <code-login-form/>
          </nut-tab-pane>
        </nut-tabs>
      </div>
    </div>
  </div>
</template>