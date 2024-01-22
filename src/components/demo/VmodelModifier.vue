<template>
  <div>
    <input type="text" v-model="model" />
  </div>
</template>

<script setup lang="ts">
const [model, modifiers] = defineModel({
  set(value) {
    if (modifiers.capitalize) {
      return value[0].toUpperCase() + value.slice(1);
    }
    return value;
  },
});
</script>

<style scoped></style>
