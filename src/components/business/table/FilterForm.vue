<template>
  <div class="filter">
    <div class="form">
      <el-form ref="form" inline v-bind="$attrs">
        <slot></slot>
      </el-form>
    </div>
    <div class="hanle">
      <el-button type="primary" @click="submit">搜索</el-button>
      <el-button @click="reset">重置</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormInstance } from 'element-plus';
import { ref } from 'vue';

const emit = defineEmits<{
  (e: 'submit'): void;
  (e: 'reset'): void;
}>();

const form = ref<FormInstance>();

const submit = () => {
  emit('submit');
};

const reset = () => {
  form.value?.resetFields();
  emit('reset');
};
</script>

<style scoped lang="scss">
.filter {
  display: flex;
  .hanle {
    margin-left: 20px;
  }
}
</style>
