import axios, { AxiosResponse } from 'axios';
// import { ElLoading } from 'element-plus';
import qs from 'qs';
import { createSketion } from 'sketion-http';

import { MyRequest, StandardResponse } from './interface';
// 创建一个`axios`对象，用户发送网络请求
const myAxios = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  transformRequest: [
    function (data) {
      //  'Content-Type': 'application/x-www-form-urlencoded' 需要配合 `qs.stringify` 来转换数据
      return qs.stringify(data);
    },
  ],
  timeoutErrorMessage: '请求超时(10s)，请检查网络或联系管理员',
});

// class MyResponse<T = any> implements StandardResponse<T> {
//   public code: number;

//   public msg: string;

//   public data: T;

//   public _originalData_: any;

//   constructor(res: StandardResponse) {
//     this.code = res.code;
//     this.msg = res.msg;
//     this.data = res.data;
//     this._originalData_ = res._originalData_;
//   }

//   // 添加判断请求是否成功的快捷方法
//   public get success() {
//     return this.code === 0;
//   }
// }
// new MyResponse(axiosRes.data.code, axiosRes.data.msg, axiosRes.data.data, axiosRes)
class MyResponse<T = any> implements StandardResponse<T> {
  public code: number;

  public msg: string;

  public data: T;

  public _originalData_: any;

  constructor(code: number, msg: string, data: any, axiosRes: any) {
    this.code = code;
    this.msg = msg;
    this.data = data;
    this._originalData_ = axiosRes;
  }

  // 添加判断请求是否成功的快捷方法
  public get success() {
    return this.code === 0;
  }
}
// 使用`createSketion` 创建一个`sketion`对象
export const sketionUtil = createSketion<MyRequest, MyResponse>({
  getDataFromCache: (request) => {
    console.log('getDataFromCache', request);
    // 这里可以根据url和参数来定位缓存数据
    // 示例中为了方便，固定返回一个成功值
    return new MyResponse(0, '登陆成功拉', {}, {});
  },
  beforeRequest: (request) => {
    if (request && request.showLoading)
      // Toast.loading({
      //   message: request?.loadingText || '加载中...',
      //   forbidClick: true,
      //   duration: 0,
      // });
      console.log('加载中');
    // const loading = ElLoading.service({
    //   lock: true,
    //   text: 'Loading',
    //   background: 'rgba(0, 0, 0, 0.7)',
    // })
  },
  afterRequest: (response, request) => {
    console.log('--afterRequest--', response);

    if (request && request.toastToken) {
      request?.toastToken.close();
      // Toast.clear();
    } else {
      // Toast.clear();
    }

    // Toast.clear();
    // ElMessage('This is a message.')
    if (!response.success) {
      // Notify({ type: 'warning', message: response.msg });
      console.log('response.msg', response.msg);
    }

    return response;
  },
  sendRequest(request) {
    return myAxios(request as MyRequest);
  },
  parseRes(res: any) {
    const axiosRes = res as AxiosResponse;
    if (axiosRes.status === 200) {
      if (axiosRes.data) {
        return Promise.resolve(
          new MyResponse(axiosRes.data.code, axiosRes.data.msg, axiosRes.data.data, axiosRes)
        );
      } else {
        return new MyResponse(500, 'res.data is null', null, axiosRes);
      }
    } else {
      return new MyResponse(res.status, res.statusText, null, axiosRes);
    }
  },
  parseError(error: Error) {
    return new MyResponse(500, error.message, null, error);
  },
});
