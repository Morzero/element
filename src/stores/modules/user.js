import { defineStore } from 'pinia'
import { login } from '@/API/user'


export const userStors = defineStore('user', {

   state: () => ({
      formData: {},
      token: ''
   }),

   actions: {

      setHours(day) {
         const now = new Date();
         return now.setHours(now.getHours() + (24 * day)); // 设置的时间大于当前的
      },
      //token 有效期
      toLogin(data) {
         this.formData = data
         login(this.formData).then(res => {
            if (res.data.code == 20000) {
               this.token = res.data.data.token
               // 三天后 清理token 
               localStorage.setItem('token', this.token)
               localStorage.setItem('expirationDate', this.setHours(3));
           
            } else {
               console.log(res.data.code, '错误的账号或者密码');
            }
         })
      },

   },
})

