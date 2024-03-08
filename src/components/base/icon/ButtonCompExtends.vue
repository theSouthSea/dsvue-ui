<template>
  <button class="btn-base">
    <IconComp :iconName="iconName"></IconComp>
    {{ name }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import IconComp from './IconComp.vue';

export default defineComponent({
  extends: IconComp,
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setUp() {},
});
</script>

<style scoped>
.btn-base {
  height: 32px;
  line-height: 32px;
  padding: 0 10px;
}
</style>
