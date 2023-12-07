<script setup lang="ts">
useStore().category = {
  name: '司法拍卖',
  link: '/category',
  children: []
}
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
  <header-bar :active-id="2" />
  <banner title="拍卖平台 ● 司法" src="/src/assets/svg/judicial-hover.svg" />
  <search-bar>司法资产</search-bar>
  <router-view />
</template>
