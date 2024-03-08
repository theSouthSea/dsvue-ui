<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue';
import en from 'element-plus/es/locale/lang/en';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';

import ButtonComp from '@/components/base/icon/ButtonComp.vue';
import ButtonCompExtends from '@/components/base/icon/ButtonCompExtends.vue';
import IconBase from '@/components/base/icon/IconBase.vue';
import IconComp from '@/components/base/icon/IconComp.vue';
import LanguageSelect from '@/components/config/LanguageSelect.vue';
// 自定义图标
import IconMenu from '~icons/ali/菜单';
import IconStar from '~icons/mdi-light/star';
const i18n = useI18n();
// console.log('app-i18n', i18n);
// const locale = i18n.locale.value === 'zh' ? zhCn : en;
const locale = computed(() => (i18n.locale.value === 'zh' ? zhCn : en));

// 主题切换
const isDark = ref(false);
const chageTheme = (val: boolean) => {
  if (!val) {
    document.documentElement.setAttribute('theme', 'light');
    document.querySelector('html')?.classList.remove('dark');
    document.querySelector('html')?.classList.add('light');
  } else {
    document.documentElement.setAttribute('theme', 'dark');
    document.querySelector('html')?.classList.remove('light');
    document.querySelector('html')?.classList.add('dark');
  }
  isDark.value = val;
};
</script>

<template>
  <el-config-provider :locale="locale">
    <language-select />
    <el-switch
      :value="isDark"
      @change="chageTheme"
      class="mb-2"
      active-text="Dark"
      inactive-text="Light"
    />
    <IconStar></IconStar>
    <el-icon size="24" color="red"><IconStar></IconStar></el-icon>
    <el-icon size="24" color="red"><IconMenu></IconMenu></el-icon>
    <IconMdilightStar></IconMdilightStar>
    <icon-mdilight-star></icon-mdilight-star>
    <icon-ali-wifi></icon-ali-wifi>
    <icon-ali-sale></icon-ali-sale>
    <icon-ali-others></icon-ali-others>
    <RegisterComp></RegisterComp>
    <IconBase></IconBase>
    <IconComp iconName="icon-erweima"></IconComp>
    <ButtonComp name="新增" iconName="icon-gouwuchetianjia"></ButtonComp>
    <ButtonCompExtends name="新增商品" iconName="icon-gouwuchetianjia"></ButtonCompExtends>
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
