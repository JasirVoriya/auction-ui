<template>
  <!-- <img src="@/assets/svg/bg.svg" class="bg-scroll absolute bottom-0 w-full h-auto z-0" /> -->
  <div class="bg-fixed bg-bottom bg-no-repeat" style="background-image: url(src/assets/svg/bg.svg)">
    <router-view />
    <nut-backtop class="cursor-pointer" :distance="200" :right="50" :bottom="50">
    </nut-backtop>

  </div>
</template>
<style>
.shadow-card {
  border-radius: 20px;
  box-shadow: 15px 15px 30px #bebebe,
    -15px -15px 30px #ffffff;
}
</style>
