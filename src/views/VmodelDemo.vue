<template>
  <h2>msg:{{ msg }}</h2>
  <h2>count:{{ msg }}</h2>
  <h2>首字母大写:{{ text }}</h2>
  <h2>vue3.4之前首字母大写:{{ myText }}</h2>
  <VmodelChild v-model="msg"></VmodelChild>
  <DefineModel v-model="count"></DefineModel>
  <VmodelModifier v-model.capitalize="text"></VmodelModifier>
  <VmodelModifierPre v-model.capitalize="myText"></VmodelModifierPre>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import DefineModel from '@/components/demo/DefineModel.vue';
import VmodelChild from '@/components/demo/VmodelChild.vue';
import VmodelModifier from '@/components/demo/VmodelModifier.vue';
import VmodelModifierPre from '@/components/demo/VmodelModifierPre.vue';
const msg = ref('好好学习,天天向上');
const count = ref(0);
const text = ref('');
const myText = ref('');
</script>

<style scoped></style>
