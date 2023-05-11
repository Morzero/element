import main from '../API/reqest'

export function login(data) {
   return main({
      url: "/api/xs/login",
      method: 'post',
      data // 传入一个 {username:"" , password:''}
   })
}

export function getUserinfo() {
   return axios({
      url: "/admin/getuserinfo",
      method: "post",
   });
}
