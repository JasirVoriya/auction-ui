<script setup lang="ts">
const account = ref('');
const password = ref('');
</script>
<template>
  <div class="flex items-center justify-center mt-10">
    <form>
      <div class="flex overflow-hidden border-2 border-rose-600 rounded-2xl w-72 h-9">
        <label class="flex justify-center items-center w-14 rounded-l-xl text-white text-sm bg-rose-600" for="account">
          账号
        </label>
        <input type="text" class="focus:ring-0 border-0 bg-transparent 
            pl-1 w-55
          placeholder:text-slate-400 placeholder:text-sm 
          text-black text-sm
          caret-rose-600" placeholder="账户名/邮箱" v-model="account" name="account" id="account" />
      </div>
      <div class="flex border-2 border-rose-600 rounded-2xl w-72 h-9 mt-3">
        <label class="flex justify-center items-center w-14 rounded-l-xl text-white text-sm bg-rose-600" for="password">
          密码
        </label>
        <input type="password" class="focus:ring-0 border-0 bg-transparent 
            pl-1 w-55
          placeholder:text-slate-400 placeholder:text-sm 
          text-black text-sm
          caret-rose-600" placeholder="请输入密码" v-model="password" name="password" id="password" />
      </div>
      <button type="submit" class="mt-5 w-72 h-9 px-4 py-1
        bg-rose-500
        text-sm font-semibold rounded-xl border border-rose-200 text-white
        hover:bg-rose-600 hover:border-transparent 
        active:outline-none active:ring-2 active:ring-rose-600 active:ring-offset-1">
        登录
      </button>
    </form>
  </div>
  <div class="flex mt-7">
    <a class="px-1" href="#">
      <span class="text-xs text-slate-500">QQ登录</span>
    </a>
    <a class="px-1" href="#">
      <span class="text-xs text-slate-500">支付宝登录</span>
    </a>
  </div>
  <div class="flex flex-row-reverse mt-7">
    <a class="px-1" href="#">
      <span class="text-xs text-slate-500">忘记密码</span>
    </a>
    <a class="px-1" href="#">
      <span class="text-xs text-slate-500">忘记账号</span>
    </a>
  </div>
</template>