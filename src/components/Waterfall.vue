<script setup lang="ts">
/**
 * 瀑布流布局
 * @param {Number} col 列数
 */
const props = defineProps({
  col: {
    type: Number,
    default: 2
  }
});
const colnum = ref(props.col);
// 长度为colnum的数组，用于存放每一列的高度
let colHeight = new Array(colnum.value).fill(0);
let waterfallWidth = 0;
let childWidth = 0;
let index = 0;
// 布局函数
const layout = (el: HTMLElement) => {
  const children = Array.from(el.children || []) as HTMLElement[]
  if (children.length === 0) return;
  waterfallWidth = el.offsetWidth || 0;
  childWidth = waterfallWidth / colnum.value;
  // 从索引开始，设置每个子元素的位置
  children.slice(index).forEach((child) => {
    // 获取最小列的高度和索引
    const minHeight = Math.min(...colHeight);
    const minIndex = colHeight.findIndex((item) => item === minHeight);
    // 获取父元素的偏移量
    const parentTop = el.offsetTop || 0;
    // 设置子元素的宽度和位置
    child.style.width = `${childWidth}px`;
    child.style.transform = `translate(${childWidth * minIndex}px, ${parentTop + minHeight - child.offsetTop}px)`;
    child.style.transition = 'all 0.3s';
    // 更新列高
    colHeight[minIndex] += child.offsetHeight;
  });
  // 更新父元素的高度
  el.style.height = `${Math.max(...colHeight)}px`;
  // 更新索引
  index = children.length;
  console.log('waterfall layout');
}
const vWaterfall = {
  mounted: layout,
  updated: layout
}
</script>
<template>
  <div v-waterfall class="w-full">
    <slot />
  </div>
</template>