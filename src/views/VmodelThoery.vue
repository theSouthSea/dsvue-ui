<template>
  <div>
    <p>直接使用v-model:{{ text1 }}</p>
    <p><input type="text" placeholder="请输入内容" v-model="text1" /></p>
    <p>v-model实现原理:{{ text2 }}</p>
    <p><input type="text" placeholder="请输入内容" :value="text2" @input="handleChange" /></p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const text1 = ref('');
const text2 = ref('');
const handleChange = (e: Event) => {
  console.log(e.target as HTMLInputElement);
  text2.value = (e.target as HTMLInputElement).value;
};
</script>

<style scoped></style>
