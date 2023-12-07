<script setup lang="ts">
useStore().category = {
  name: '全部分类',
  link: '/category',
  children: []
}
categoryApi.getTopCategory().then(res => {
  useStore().category.children.push(...res)
  res.forEach((item: { id: String; children: any; }) => {
    categoryApi.getChildrenCategory(item.id).then(res => {
      useStore().category.children.push(...res)
    })
  })
})
categoryApi.getJudicialTopCategory().then(res => {
  useStore().category.children.push(...res)
  res.forEach((item: { id: String; children: any; }) => {
    categoryApi.getChildrenCategory(item.id).then(res => {
      useStore().category.children.push(...res)
    })
  })
})
</script>
<template>
  <header-bar :active-id="1" />
  <banner title="拍卖平台" src="/src/assets/svg/home-hover.svg" />
  <search-bar>首页搜索</search-bar>
  <router-view />
</template>
