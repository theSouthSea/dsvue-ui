<template>
  <el-dropdown trigger="click" class="international" @command="handleSetLanguage">
    <div>
      <el-tooltip content="国际化语言切换" :effect="effect">
        <el-button>{{ app.language === 'zh' ? '中文' : 'English' }}</el-button>
      </el-tooltip>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="app.language === 'zh'" command="zh"> 中文 </el-dropdown-item>
        <el-dropdown-item :disabled="app.language === 'en'" command="en">
          English
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus';
import { defineProps } from 'vue';
import { useI18n } from 'vue-i18n';

// import { useStore } from 'vuex';
import { useApp } from '@/stores/app';

const app = useApp();
defineProps({
  effect: {
    type: String,
    default: 'dark',
    validator: function (value: Theme) {
      // 这个值必须匹配下列字符串中的一个
      return ['dark', 'light'].includes(value);
    },
  },
});

// const store = useStore();
// const language = computed(() => store.getters.language);

// 切换语言的方法
const i18n = useI18n();
const language = app.language;
console.log('language-i18n', i18n);
console.log('language-app', language);
const handleSetLanguage = (lang: Language) => {
  i18n.locale.value = lang;
  // i18n.global.locale.value = lang;
  // store.commit('setLanguage', lang);
  app.setLanguage(lang);
  console.log('handleSetLanguage-lang', lang);
  ElMessage.success(`语言成功切换为${lang === 'zh' ? '中文' : '英文'}`);
};
</script>
