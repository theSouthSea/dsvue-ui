import axios from 'axios';

// 创建axios实例
const instance = axios.create({
  baseURL: 'http://localhost:3000', // 设置基本URL
  //   withCredentials: true, // 是否携带凭证
  timeout: 5000, // 请求超时时间
  //   headers: {
  //     // 设置请求头
  //     'Content-Type': 'application/json'
  //   }
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    // 可以在这里设置请求头、添加token等
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 对响应数据做些什么
    // response.data 的数据结构是{status, data, message, headers, config}
    // 根据status是否是'success'进行成功的判断
    const resData = response.data || {};
    if (resData.status === 'success') {
      return resData.data;
    } else {
      return Promise.reject(resData.message);
    }
  },
  (error) => {
    // 对响应错误做些什么
    return Promise.reject(error);
  }
);

// export default instance;

export default {
  get(url, params) {
    return instance.get(url, { params });
  },
  post(url, data) {
    return instance.post(url, data);
  },
  put(url, data) {
    return instance.put(url, data);
  },
  delete(url) {
    return instance.delete(url);
  },
};
