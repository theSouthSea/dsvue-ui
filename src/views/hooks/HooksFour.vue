<script setup name="Index" lang="ts">
import { submitApi } from '@/api';
import { useAutoRequest } from '@/hooks/request/useAutoRequest';

const [loading, submit] = useAutoRequest(submitApi);

function onSubmit() {
  submit('aaa').then((res) => {
    console.log('res', res);
  });
}
</script>

<template>
  <div class="col">
    <el-button :loading="loading" @click="onSubmit">提交</el-button>
  </div>
</template>
