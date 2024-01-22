<template>
  <div :style="{ marginTop: '10px' }">
    <el-switch
      :value="data.isFinished"
      @change="completedChangeHandler"
      class="mt-2"
      style="margin-left: 24px"
      inline-prompt
      :active-icon="Check"
      :inactive-icon="Close"
    />
    <span :style="{ textDecoration: data.isFinished ? 'line-through' : 'none' }">
      {{ data.text }}
    </span>
    <el-button @click="deleteHandler(data.id)">删除</el-button>
  </div>
</template>

<script setup lang="ts">
import { Check, Close } from '@element-plus/icons-vue';
// import { ref } from 'vue';
// export interface TodoItem {
//   id: number;
//   title: string;
//   completed: boolean;
// }
export interface TodoItemProps {
  data: Todo;
}
// const isCompleted = ref(false);
// const props = withDefaults(defineProps<TodoItemProps>(), {
//   data: () => ({}),
//   deleteItem: () => {},
//   toggleCompleted: () => {},
// });
const props = defineProps<TodoItemProps>();
const emit = defineEmits<{
  (e: 'deleteItem', id: number): void;
  (e: 'toggleCompleted', id: number): void;
}>();
const completedChangeHandler = (checked: boolean) => {
  console.log('checked', checked);
  // const { data, toggleCompleted } = props;
  // toggleCompleted(data.id);
  emit('toggleCompleted', props.data.id);
};
const deleteHandler = (id: number) => {
  console.log('deleteHandler-id', id);
  // const { data, deleteItem } = props;
  // deleteItem(data.id);
  emit('deleteItem', id);
};
</script>

<style scoped></style>
