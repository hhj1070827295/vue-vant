import axios from 'axios'
// import store from '@/store'
// import { getToken } from '@/utils/auth'
import qs from 'qs'

// create an axios instance
// process.env.VUE_APP_BASE_API
const service = axios.create({
  baseURL:process.env.VUE_APP_BASE_API, // url = base url + request url
  //   baseURL: window.BaseUrl, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
  headers: {
    'content-type' : 'application/x-www-form-urlencoded',
  }
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    config.data = qs.stringify(config.data)
    // if (store.getters.token) {
    //   // let each request carry token
    //   // ['X-Token'] is a custom headers key
    //   // please modify it according to the actual situation
    // //   config.headers['account'] = localStorage.getItem('account')
    // //   config.headers['token'] = getToken()
    // //   config.headers['token'] = getToken()
    // }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    return res
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
