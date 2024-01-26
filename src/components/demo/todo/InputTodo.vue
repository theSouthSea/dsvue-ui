<template>
  <el-row>
    <el-col :span="18"><el-input v-model="inputValue" /></el-col>
    <el-col :span="6"><el-button type="primary" @click="clickHandler">新增</el-button></el-col>
  </el-row>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const inputValue = ref('');
// const emit = defineEmits({
//     addTodo: (todo: string) => void,
// })
const emit = defineEmits<{
  (e: 'addTodo', todo: string): void;
}>();
const clickHandler = () => {
  emit('addTodo', inputValue.value);
  inputValue.value = '';
};
</script>

<style scoped></style>
