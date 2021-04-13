import axios from "axios";

import {BASE_URL, TIMEOUT} from "./config";


export default function request(option) {
  return new Promise(((resolve, reject) => {
    const instance = axios.create({
      baseURL: BASE_URL,
      timeout: TIMEOUT
    });

    instance.interceptors.request.use(config => config, err => err)

    instance.interceptors.response.use(response => response.data, err => {
      if (err && err.response) {
        switch (err.response.status) {
          case 400:
            err.message = '请求错误'
            break
          case 401:
            err.message = '未授权的访问'
            break
          default:
        }
      }
      return err
    })

    instance(option).then(res => resolve(res)).catch(err => reject(err))
  }))
}
