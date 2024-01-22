<template>
  <div>
    <el-input v-model="inputValue" />
    <el-button type="primary" @click="clickHandler">新增</el-button>
  </div>
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
