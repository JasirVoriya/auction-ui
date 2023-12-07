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
const htmlCode=ref('<p><img src=\"http://localhost:8080/file/download/1732704799897452546\" alt=\"\" data-href=\"\" style=\"\"/></p><p><img src=\"http://localhost:8080/file/download/1732704871976566785\" alt=\"\" data-href=\"\" style=\"\"/></p><p><img src=\"http://localhost:8080/file/download/1732704926586404865\" alt=\"\" data-href=\"\" style=\"\"/></p>')
</script>
<template>
  <Editor v-model="htmlCode" :defaultConfig="editorConfig" style="overflow-y: hidden"
                @onCreated="handleCreated" />
</template>