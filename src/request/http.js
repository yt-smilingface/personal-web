import axios from 'axios' // 引入axios
// import store from '../store/index' // 引入Vuex
// import router from '../router' // 引入vue-router
import { Message } from 'element-ui' //局部引入UI框架组件
// import Qs from 'qs'

// 环境的切换
// if (process.env.NODE_ENV === 'development') {
//   axios.defaults.baseURL = '/api' // 开发环境
// } else if (process.env.NODE_ENV === 'debug') {
//   axios.defaults.baseURL = '' // 调试环境
// } else if (process.env.NODE_ENV === 'production') {
//   axios.defaults.baseURL = 'https://apis.seajc.com/36client' // 生产环境
// }


//引入nprogress
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' //这个样式必须引入

axios.defaults.baseURL = 'http://139.9.150.10:9876/dv/'

// 请求超时时间
axios.defaults.timeout = 20000;

//http request 拦截器
axios.interceptors.request.use(
  config => {
    config.data = JSON.stringify(config.data);
    config.headers = {
      'Content-Type': 'application/json',
      // 'token': store.state.userInfo.token
    }
    NProgress.start()
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// // 响应拦截器
axios.interceptors.response.use(
  // 服务码是200的情况
  response => {
    NProgress.done()
    if (response.data.status_code === 100) {
      return Promise.resolve(response);
    } else {
      Message({
        message: response.data.error_msg,
        type: 'error',
      });
      return Promise.reject(response)
    }
  },
  // 服务器状态码不是200的情况
  error => {
    if (error.data.status_code) {
      switch (error.data.status_code) {
        // 404请求不存在
        case 404:
          Message({
            message: '网络请求不存在',
            type: 'error',
          });
          break;
        // 其他错误，直接抛出错误提示
        default:
          Message({
            message: error.data.error_msg,
            type: 'error',
          });
      }
      return Promise.reject(error.data)
    }
  }
)

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * @param {Object} config [请求时url后直接加的参数，默认为空]
 */
export function get(url, params,config = {add: '' }) {
  return new Promise((resolve, reject) => {
    axios.get(url,{
      params: params
    },config).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * @param {Object} config [是否启用multipart/form-data格式请求，默认为false]
 */
export function post(url, params, config = {isUpload: false }) {
  return new Promise((resolve, reject) => {
    axios.post(url, params, config)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}