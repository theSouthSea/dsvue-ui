<!-- 表格布局组件，用来控制布局样式 -->
<template>
  <div class="table-layout" v-loading="loading">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="body">
      <slot name="body"></slot>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  loading: boolean;
}>();
</script>

<style scoped>
.table-layout {
  background-color: #fff;
  padding: 10px;
}
.footer {
  margin-top: 20px;
}
</style>
