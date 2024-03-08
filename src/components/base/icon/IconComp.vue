<template>
  <svg :class="svgClass" aria-hidden="true" @click="handleClick">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const emit = defineEmits<{
  (e: 'click'): void;
}>();
const props = defineProps({
  svgClass: {
    type: String,
    default: 'icon',
  },
  iconName: {
    required: true,
    type: String,
  },
});
const svgClass = computed(() => `icon ${props.svgClass}`);
const iconName = computed(() => `#${props.iconName}`);
const handleClick = () => {
  console.log('click');
  emit('click');
};
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
