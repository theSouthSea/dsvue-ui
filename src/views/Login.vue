<template>
  <div class="login-container">
    <el-form class="login-form" :model="loginForm" :rules="loginRules" ref="loginFromRef">
      <div class="title-container">
        <h3 class="title">{{ $t('login.title') }}</h3>
        <lang-select class="lang-select"></lang-select>
      </div>
      <el-form-item prop="username">
        <el-input placeholder="username" name="username" type="text" v-model="loginForm.username" />
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          :type="passwordType"
          placeholder="password"
          name="password"
          v-model="loginForm.password"
        />
      </el-form-item>

      <el-button type="primary" class="submit">{{ $t('login.loginBtn') }}</el-button>
      <div class="tips" v-html="$t('login.desc')"></div>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

import LangSelect from '@/components/config/LanguageSelect.vue';
import { validatePassword } from '@/utils/rules';
// 数据源
const loginForm = ref({
  username: 'super-admin',
  password: '123456',
});
// 验证规则
const i18n = useI18n();
const loginRules = ref({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: i18n.t('login.usernameRule'),
    },
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword(),
    },
  ],
});
</script>
