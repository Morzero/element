import axios from 'axios'
//  配置 进度读 每次发生请求的时候 出发
import NProgress from 'nprogress'
import '../../node_modules/nprogress/nprogress.css'
import router from '../router/index'
import { ElMessage } from 'element-plus'
import 'element-plus/lib/components/message/style/css'
window.ElMessage = ElMessage
const instance = axios.create({
   baseURL: '/api',
   timeout: 10000
})

// 添加请求拦截器
instance.interceptors.request.use(
   function (config) {
      // 在发送请求之前做些什么
      NProgress.start()

      //  每次发送请求 有token就携带
      if (localStorage.getItem('token')) {
         config.headers['Authorization'] = localStorage.getItem('token')
      }

      return config
   },
   function (error) {
      // 对请求错误做些什么
      return Promise.reject(error)
   }
)

// 添加响应拦截器
instance.interceptors.response.use(
   function (response) {
      // 2xx 范围内的状态码都会触发该函数。
      // 对响应数据做点什么
      NProgress.done()
      let { code } = response.data
      if (code == 40004 || code == 50008) {
         if (code == 50008) {
            localStorage.removeItem('token')
            router.push('/login')
         }
         ElMessage.error(response.data.message)
      }

      return response.data
   },
   function (error) {
      // 超出 2xx 范围的状态码都会触发该函数。
      // 对响应错误做点什么
      return Promise.reject(error)
   }
)

export default instance
