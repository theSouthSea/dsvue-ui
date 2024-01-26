<template>
  <el-button-group>
    <el-button type="primary" :icon="ArrowLeft">全部</el-button>
    <el-button type="primary" :icon="ArrowRight">未完成</el-button>
    <el-button type="primary" :icon="ArrowRight">已完成</el-button>
    <el-button type="primary">
      Next Page<el-icon class="el-icon--right"><ArrowRight /></el-icon>
    </el-button>
  </el-button-group>
</template>

<script setup lang="ts">
import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue';
</script>

<style scoped></style>
