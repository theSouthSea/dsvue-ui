<template>
  <el-table :data="data" style="width: 100%">
    <slot></slot>
  </el-table>
</template>

<script setup lang="ts">
defineProps<{
  data?: object[];
}>();
</script>

<style scoped></style>
