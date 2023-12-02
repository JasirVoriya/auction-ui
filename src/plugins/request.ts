import axios, { AxiosError } from "axios";
import  qs from 'qs'
import{v4 as uuidv4} from 'uuid'
// 定义泛型接口，表示请求返回的数据结构
interface ApiResponse<T> {
  success: boolean;
  result: T;
  message?: string;
  code?: Number;
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
    if(useUserStore().uuid==='')useUserStore().uuid=uuidv4();
    config.headers["uuid"]=useUserStore().uuid;
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
      return Promise.reject(response);
    }
    //返回数据，根据业务逻辑做相应的处理
    return response.data;
  },
  (error: AxiosError<ApiResponse<any>>) => {
    console.log(error);
    const errorMessage = error.response?.data?.message || '请求失败';
    ElMessage.error(errorMessage);
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