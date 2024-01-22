<template>
  <div>
    <span>鼠标位置: x:{{ x }}, y:{{ y }}</span>
  </div>
</template>

<script setup lang="ts">
import useMousePosition from '@/hooks/useMousePosition';
const [x, y] = useMousePosition();
</script>
