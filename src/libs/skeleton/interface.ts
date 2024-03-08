import { AxiosRequestConfig } from 'axios';
import { SketionRequestOptions } from 'sketion-http';

export interface MyRequest extends SketionRequestOptions, AxiosRequestConfig {
  // 可以添加自己另需的属性
  extraStr?: string;
  loadingText?: string;
  showLoading?: boolean;
}

export interface StandardResponse<T = any> {
  code: number;
  msg: string;
  data: T;
  _originalData_: any;
}
