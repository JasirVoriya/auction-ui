<script setup lang="ts">

const tagIndex = ref('0');
const account = ref('');
const password = ref('');
const email = ref('');
const code = ref('');
const getCode = (event: MouseEvent) => {
  console.log('获取验证码');
  console.log(event);
  const target = event.target as HTMLButtonElement;
  target.disabled = true;
  // 60s倒计时
  const countDown = () => {
    let time = 60;
    const timer = setInterval(() => {
      time--;
      target.innerText = `${time}s`;
      if (time === 0) {
        clearInterval(timer);
        target.disabled = false;
        target.innerText = '获取验证码';
      }
    }, 1000);
  }
  countDown();
};
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
            <div class="flex items-center justify-center mt-10">
              <form>
                <div class="flex overflow-hidden border-2 border-rose-600 rounded-2xl w-72 h-9">
                  <label class="flex justify-center items-center w-14 rounded-l-xl text-white text-sm bg-rose-600"
                    for="account">
                    账号
                  </label>
                  <input type="text" class="focus:ring-0 border-0 bg-transparent 
                                        pl-1 w-55
                                      placeholder:text-slate-400 placeholder:text-sm 
                                      text-black text-sm
                                      caret-rose-600" placeholder="账户名/邮箱" v-model="account" name="account"
                    id="account" />
                </div>
                <div class="flex border-2 border-rose-600 rounded-2xl w-72 h-9 mt-3">
                  <label class="flex justify-center items-center w-14 rounded-l-xl text-white text-sm bg-rose-600"
                    for="password">
                    密码
                  </label>
                  <input type="password" class="focus:ring-0 border-0 bg-transparent 
                                        pl-1 w-55
                                      placeholder:text-slate-400 placeholder:text-sm 
                                      text-black text-sm
                                      caret-rose-600" placeholder="请输入密码" v-model="password" name="password"
                    id="password" />
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
              <a class="px-1" href="#">
                <span class="text-xs text-slate-500">免费注册</span>
              </a>
            </div>
          </nut-tab-pane>
          <nut-tab-pane title="验证码登录" pane-key="1" style=" background-color: rgba(0,0,0,0);">
            <div class="flex items-center justify-center mt-10">
              <form>
                <div class="flex border-2 border-rose-600 rounded-2xl w-72 h-9">
                  <label class="flex justify-center items-center w-14 rounded-l-xl text-white text-sm bg-rose-600"
                    for="email">
                    邮箱
                  </label>
                  <input type="email" class="focus:ring-0 border-0 bg-transparent 
                                        pl-1 w-55
                                      placeholder:text-slate-400 placeholder:text-sm 
                                      text-black text-sm
                                      caret-rose-600" placeholder="请输入邮箱" v-model="email" name="email" id="email" />
                </div>
                <div class="flex border-2 border-rose-600 rounded-2xl w-72 h-9 mt-3">
                  <label class="flex justify-center items-center w-14 rounded-l-xl text-white text-sm bg-rose-600"
                    for="code">
                    验证码
                  </label>
                  <input type="text" class="focus:ring-0 border-0 bg-transparent 
                                        pl-1 w-36
                                      placeholder:text-slate-400 placeholder:text-sm 
                                      text-black text-sm
                                      caret-rose-600" placeholder="请输入验证码" v-model="code" name="code" id="code" />
                  <button @click.prevent="getCode" class="flex justify-center items-center w-20 rounded-r-xl 
                                    text-gray-500 text-xs
                                    hover:text-rose-500
                                      disabled:cursor-not-allowed disabled:hover:text-gray-500">
                    获取验证码
                  </button>
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
                <span class="text-xs text-slate-500">免费注册</span>
              </a>
            </div>
          </nut-tab-pane>
        </nut-tabs>
      </div>
    </div>
  </div>
</template>