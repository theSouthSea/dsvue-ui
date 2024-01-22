<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
const counter = useCounterStore();
// 三种改变状态的方式
// counter.count++;
// // 自动补全！ ✨
// counter.$patch({ count: counter.count + 1 });
// // 或使用 action 代替
// counter.increment();
const handleIncrementByPatch = () => {
  counter.$patch({ count: counter.count + 1 });
};
</script>
<template>
  <!-- 直接从 store 中访问 state -->
  <div>Current Count: {{ counter.count }}</div>
  <el-button @click="counter.increment">Increment</el-button>
  <el-button @click="counter.decrement">Decrement</el-button>
  <el-button @click="handleIncrementByPatch">Increment Async</el-button>
</template>
