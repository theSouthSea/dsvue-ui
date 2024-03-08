<template>
  <el-select v-model="value" :loading="loading">
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </el-select>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { useFetchSelect } from '@/hooks/request/useFetchSelect';
function apiFun() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve([
          { label: '选项1', value: 1 },
          { label: '选项2', value: 2 },
        ]);
      } else {
        reject(new Error('不小心出错了！'));
      }
    }, 1000);
  });
}
const { options, loading } = useFetchSelect(apiFun);
const value = ref();
</script>

<style scoped></style>
