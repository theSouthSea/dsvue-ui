<template>
  <p>Times clicked: {{ count }}</p>
  <button @click="increment">increment</button>
</template>

<script>
export default {
  name: 'MyButton',
  data: () => ({
    count: 0,
  }),
  methods: {
    increment() {
      this.count++;
    },
  },
};
</script>
