<script setup lang="ts">
import { Waterfall } from 'vue-waterfall-plugin-next'
import 'vue-waterfall-plugin-next/dist/style.css'

const goodsList = ref([]);
const pageData = ref({
  page: 1,
  size: 10,
  total: 0
});
goodsApi.getGoodsList(pageData.value.page, pageData.value.size).then(res => {
  goodsList.value = res.records;
  pageData.value.total = res.total;
  console.log(goodsList.value);
});

const infinityValue = ref(false);
const hasMore = ref(true);
const loadMore = () => {
  setTimeout(() => {
    // cycle.value++;
    pageData.value.page++;
    if (pageData.value.page * pageData.value.size >= pageData.value.total) {
      hasMore.value = false;
    }
    goodsApi.getGoodsList(pageData.value.page, pageData.value.size).then(res => {
      const records = res.records as [];
      goodsList.value.push(...records);
      pageData.value.total = res.total;
      infinityValue.value = false;
    });
  }, 1000);
};

</script>
<template>
  <container-box>
    <div class="grid grid-cols-4 gap-2 py-2">
      <div class=" col-span-3">
        <span>猜你喜欢</span>
      </div>
      <div>
        <span>每日发现</span>
      </div>
    </div>
    <div class="grid grid-cols-4 gap-1 py-2">
      <nut-infinite-loading v-model="infinityValue" load-txt="Loading..." load-more-txt="End~" :has-more="hasMore"
        @load-more="loadMore" class="col-span-3">
        <Waterfall :list="goodsList" backgroundColor="rgba(0,0,0,0)" :breakpoints="{
          1200: { rowPerView: 5 },
          800: { rowPerView: 3 },
          500: { rowPerView: 2 }
        }">
          <template #item="{ item }">
            <goods-card :goods="item" />
          </template>
        </Waterfall>
      </nut-infinite-loading>
      <div>
        <div class="border-[1px] rounded-xl border-gray-300">
          <goods-item :goods="goods" v-for="goods in goodsList" class="m-2" />
        </div>
      </div>
    </div>
  </container-box>
</template>