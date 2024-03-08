<script setup name="Index" lang="ts">
// import { useAutoRequest } from "./hook";
import { cancelApi, submitApi } from '@/api';
import { useAutoLoading } from '@/hooks/request/useAutoLoading';

// const [loading, submit] = useAutoRequest(submitApi);

const [commonLoading, fetch] = useAutoLoading();

function onSubmit() {
  fetch(submitApi('submit')).then((res) => {
    console.log('res', res);
  });
}

function onCancel() {
  fetch(cancelApi('cancel')).then((res) => {
    console.log('res', res);
  });
}
</script>

<template>
  <div class="col">
    <el-button type="primary" :loading="commonLoading" @click="onSubmit"> 提交 </el-button>
    <el-button :loading="commonLoading" @click="onCancel">取消</el-button>
  </div>
</template>
