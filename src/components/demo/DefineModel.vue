<template>
  <div>
    <div>model:{{ model }}</div>
    <button @click="updateModel">Increment</button>
  </div>
</template>

<script setup lang="ts">
const model = defineModel<number>();

function updateModel() {
  model.value++;
}
</script>

<style scoped></style>
