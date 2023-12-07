<script setup lang="ts">
import "@wangeditor/editor/dist/css/style.css";
import { Editor } from '@wangeditor/editor-for-vue';
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();
const editorConfig = {
  readOnly: true,
  scroll: false
};
const handleCreated = editor => {
  // 记录 editor 实例，重要！
  editorRef.value = editor;
};
// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});
const htmlCode=ref('<h1 style=\"text-align: center;\">拍卖会机构服务保障</h1><p><img src=\"http://localhost:8080/file/download/1732703146041442305\" alt=\"\" data-href=\"\" style=\"\"/></p><p><img src=\"http://localhost:8080/file/download/1732703266237612033\" alt=\"\" data-href=\"\" style=\"\"/></p><p><img src=\"http://localhost:8080/file/download/1732704056889081858\" alt=\"\" data-href=\"\" style=\"\"/></p><p><img src=\"http://localhost:8080/file/download/1732703363641933826\" alt=\"\" data-href=\"\" style=\"\"/></p>')
</script>
<template>
  <Editor v-model="htmlCode" :defaultConfig="editorConfig" style="overflow-y: hidden"
                @onCreated="handleCreated" />
</template>