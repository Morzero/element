import { defineStore } from 'pinia'
import { login, getUserinfo } from '@/API/user'


export const userStors = defineStore('user', {

   state: () => {
      return {
         name: '1',
         formData: {},
         token: '',
         UserList: [], //用户可看列表
         UserAM: '' //用户权限
      }
   },

   actions: {

      setHours(day) {
         const now = new Date();
         return now.setHours(now.getHours() + (24 * day)); // 设置的时间大于当前的
      },
      //token 有效期
      toLogin(data) {
         this.formData = data
         login(this.formData).then(res => {
            if (res.code == 20000) {
               this.token = res.data.token
               // 三天后 清理token 
               localStorage.setItem('token', this.token)
               localStorage.setItem('expirationDate', this.setHours(3));
            } else {
               console.log(res.code, '错误的账号或者密码');
            }
         })
      },
      // login 登录 
      async getUserList() {
         let result = await getUserinfo()

         
         const data = result.data.permissionList.map((v, i, arr) => {
            v.children = arr.filter((e) => v.id == e.parentId)
            v.icon = 'eye'
            //filter 返回值  数组
            return v
         }).filter((v) => !v.parentId)
         this.UserList = data

         return this.UserList
      }
   },
})

