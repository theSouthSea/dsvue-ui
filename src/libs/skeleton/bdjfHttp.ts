/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import {
  BdjfHttp,
  BdjfRequest,
  CacheOption,
  createRequest,
  HttpConfig,
  RequestOption,
} from 'bdjf_http';
// 使用自己的baseUrl
const baseUrl = process.env.VUE_APP_SERVER || 'http://127.0.0.1:8080';

const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 15000,
});

const bdjfConfig: HttpConfig = {
  attributeMapping: {
    code: 'code',
    msg: 'msg',
    data: 'data',
  },
  successCode: 0,
  showError(res, request) {
    console.error('---error---', res.msg);
  },
  showWarn(res, request) {
    console.error('---warning---', res.msg);
  },
  showLoading(request) {
    console.log('---isLoading---', request.requestOption.loadingText || '加载中...');
  },
  hideLoading() {
    console.log('---hideLoading---');
  },
  openLog: false,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const httpInstance = new BdjfHttp(axiosInstance as any, bdjfConfig);

const request = createRequest({
  url: 'pub/common/getDefinedStrings',
  method: 'POST',
  loadingText: '获取文案...',
  data: {
    id: '1',
  },
});

httpInstance.sendRequest(request).then((res) => {
  if (res.success) {
    console.log(res);
  }
});
