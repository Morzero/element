import axios from 'axios';

// 创建一个 axios 实例
const instance = axios.create({
   baseURL: '/api', // 设置基础URL
   timeout: 10000, // 设置请求超时时间（毫秒）

});

// 请求拦截器
instance.interceptors.request.use(
   config => {
      // 在请求发送之前可以对请求进行一些处理，例如添加 token 等
      // config.headers.Authorization = `Bearer ${token}`;
      return config;
   },
   error => {
      // 请求错误处理
      console.log('request error:', error);
      return Promise.reject(error);
   }
);

// 响应拦截器
instance.interceptors.response.use(
   response => {
      // 在响应数据处理之前可以对响应数据进行一些处理，例如统一处理错误等
      // if (response.data.code === 401) {
      //   logout();
      // }
      return response;
   },
   error => {
      // 响应错误处理
      console.log('response error:', error);
      return Promise.reject(error);
   }
);

export default instance;