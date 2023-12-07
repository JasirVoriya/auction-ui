<script setup lang="ts">
useStore().category = {
  name: '珍贵好物',
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
</script>
<template>
    <header-bar :active-id="4" />
    <banner title="珍贵好物" src="/src/assets/svg/welfare-hover.svg" />
    <search-bar>珍贵好物</search-bar>
    <router-view />
</template>
