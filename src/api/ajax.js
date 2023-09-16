import axios from 'axios';
import qs from 'qs';
import { message as meg } from "antd"


// 创建axios实例
const request = axios.create({
  baseURL: 'http://127.0.0.1:3000',
  timeout: 5000  // 超时时间
});

// 请求拦截器
request.interceptors.request.use(
  config => {
    const { method, data } = config;
    if (method.toLocaleLowerCase() === 'post' && typeof data === 'object') {
        
      config.data = qs.stringify(data);
    }
    // 可在此处处理请求配置
    return config;
  },
  error => {
    // 处理请求错误
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  response => {
    // 可在此处处理响应数据
    return response.data;
  },
  error => {
    // 处理响应错误
    meg.error("获取数据失败!");
    return new Promise(()=>{});
  }
);

export default request;