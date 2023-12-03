<script setup lang="ts">
const username = ref('');
const submit = () => {
  PassportApi.changeUsername(username.value).then((res) => {
    useUserStore().userInfo.username = username.value;
    ElMessage.success('修改成功');
  })
}
</script>
<template>
  <div class="flex gap-4 p-10 mt-5 border border-gray-300 shadow-md justify-center">
    <div class="flex flex-col gap-4">
      <span class="text-red-600 font-bold"><span class="mb-2 font-semibold　text-gray-600">用户名：</span>{{
        useUserStore().userInfo.username }}</span>
      <div class="flex overflow-hidden border-2 border-rose-600 rounded-2xl w-72 h-9">
        <label class="flex justify-center items-center w-14 rounded-l-xl text-white text-sm bg-rose-600" for="username">
          用户名
        </label>
        <input type="text" class="focus:ring-0 border-0 bg-transparent 
            pl-1 w-55
          placeholder:text-slate-400 placeholder:text-sm 
          text-black text-sm
          caret-rose-600" placeholder="输入新用户名" v-model="username" name="username" id="username" />
      </div>
      <button @click.prevent="submit" class="mt-5 w-72 h-9 px-4 py-1
        bg-rose-500
        text-sm font-semibold rounded-xl border border-rose-200 text-white
        hover:bg-rose-600 hover:border-transparent 
        active:outline-none active:ring-2 active:ring-rose-600 active:ring-offset-1">
        确认修改
      </button>
    </div>
  </div>
</template>