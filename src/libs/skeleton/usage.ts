import { sketionUtil } from './sketion';

const login = (params: any) => {
  return sketionUtil.sendRequest({
    url: '/api/login',
    method: 'POST',
    data: params,
    loadingText: '登录中...',
  });
};

login({
  username: 'admin',
  password: '123456',
}).then((res) => {
  if (res.success) {
    // 登录成功
  }
});
// 或者
// const login = {
//   url: '/api/login',
//   method: 'POST',
//   data: {
//     username: 'admin',
//     password: '123456',
//   },
//   loadingText: '登录中...',
// };

// sketionUtil.sendRequest(login).then((res) => {
//   if (res.success) {
//     // 登录成功
//   }
// });
