<template>
  <button class="btn-base">
    <IconComp v-bind="$attrs"></IconComp>
    {{ name }}
  </button>
</template>

<script setup lang="ts">
import IconComp from './IconComp.vue';
defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.btn-base {
  height: 32px;
  line-height: 32px;
  padding: 0 10px;
}
</style>
