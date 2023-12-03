<script setup lang="ts">
const helpList=reactive([
  {
    type:'参拍',
    link:'/help-center',
    name:'竞买流程'
  },
  {
    type:'报名',
    link:'/help-center',
    name:'交保证金'
  },
  {
    type:'规则',
    link:'/help-center',
    name:'出价规则'
  },
  {
    type:'成交',
    link:'/help-center',
    name:'成交规则'
  }
  
]);
    
</script>
<template>
  <div class="w-full flex flex-col">
    <nut-avatar size="large" class="self-center">
      <img
        src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
    </nut-avatar>
    <span class="text-rose-600 text-xs font-bold self-center py-1">Hi！你好</span>
    <div class="self-center">
      <a href="/login">
        <button
          class="px-4 py-1 text-sm text-rose-600 font-semibold rounded-full border border-rose-200 hover:text-white hover:bg-rose-600 hover:border-transparent active:outline-none active:ring-2 active:ring-rose-600 active:ring-offset-2">
          登录
        </button>
      </a>
      <span class="inline-block w-1" />
      <a href="/register">
        <button href="/register"
          class="px-4 py-1 text-sm text-rose-600 font-semibold rounded-full border border-rose-200 hover:text-white hover:bg-rose-600 hover:border-transparent active:outline-none active:ring-2 active:ring-rose-600 active:ring-offset-2">
          注册
        </button>
      </a>
    </div>
    <div class="w-full p-2 flex flex-col">
      <div class="flex justify-between">
          <router-link to="/help-center" class="text-sm hover:text-rose-600">竞买帮助</router-link>
          <router-link to="/help-center" class="text-xs pt-[2px] after:content-['>'] after:ml-0.5 after:text-slate-400 after:font-bold">更多</router-link>
      </div>
      <div class="grid grid-cols-2 gap-1 py-2 self-center">
        <a class="group" v-for = "item in helpList" :key="item.type" :href="item.link">
          <span class="text-[10px] px-1 text-rose-600 rounded-full border border-rose-200 group-hover:text-white group-hover:bg-rose-600 group-hover:border-transparent">
            {{ item.type  }}
          </span>
          <span class="text-xs px-1 text-slate-500 group-hover:text-rose-600">
            {{ item.name   }}
          </span>
        </a>
      </div>
    </div>
  </div>
</template>