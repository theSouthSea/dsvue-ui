<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue';
import en from 'element-plus/es/locale/lang/en';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import { useI18n } from 'vue-i18n';

import LanguageSelect from '@/components/config/LanguageSelect.vue';
const locale = useI18n().locale.value === 'zh' ? zhCn : en;
</script>

<template>
  <el-config-provider :locale="locale">
    <language-select />
    <h1>{{ $t('hello') }}</h1>
    <h2>{{ $t('test') }}</h2>
    <!-- <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a> -->
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <!-- <HelloWorld msg="Vite + Vue" /> -->
    <router-view></router-view>
  </el-config-provider>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
