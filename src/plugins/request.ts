import axios from "axios";
import  qs from 'qs'
// 定义泛型接口，表示请求返回的数据结构
interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}
const service = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 1000,
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: "repeat" }),
});
service.interceptors.request.use(
  (config) => {
    // 如果是put/post请求，用qs.stringify序列化参数
    const isPutPost = config.method === "put" || config.method === "post";
    const isJson = config.headers["Content-Type"] === "application/json";
    const isFile = config.headers["Content-Type"] === "multipart/form-data";
    if (isPutPost && isJson) {
      config.data = JSON.stringify(config.data);
    }
    if (isPutPost && !isFile && !isJson) {
      config.data = qs.stringify(config.data, { arrayFormat: "repeat" });
    }
    config.headers["uuid"]='123456789';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
service.interceptors.response.use(
  (response) => {
    if(response.data.success==false){
      ElMessage.error(response.data.message||'请求失败')
      return Promise.reject(response.data);
    }
    //返回数据，根据业务逻辑做相应的处理
    return response.data;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
export function request(config: any):Promise<ApiResponse<any>> {
  return service(config);
}
export const Method = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
};