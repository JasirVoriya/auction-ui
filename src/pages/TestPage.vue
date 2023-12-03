<script setup lang="ts">
import { ref } from 'vue';
const value = ref('0');
const value2 = ref('0.0');
</script>
<template>
  <nut-tabs v-model="value" direction="vertical">
    <nut-tab-pane title="Tab 1" pane-key="0">
      <nut-tabs v-model="value2">
        <nut-tab-pane title="Tab 1" pane-key="0.0"> Tab 1 </nut-tab-pane>
        <nut-tab-pane title="Tab 2" pane-key="0.1"> Tab 2 </nut-tab-pane>
        <nut-tab-pane title="Tab 3" pane-key="0.2"> Tab 3 </nut-tab-pane>
      </nut-tabs>
    </nut-tab-pane>
    <nut-tab-pane title="Tab 2" pane-key="1">
      Tab 2
    </nut-tab-pane>
    <nut-tab-pane title="Tab 3" pane-key="2">
      Tab 3
    </nut-tab-pane>
  </nut-tabs>
</template>
