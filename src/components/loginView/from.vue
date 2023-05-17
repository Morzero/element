
<template>
   <el-form status-icon class="demo-ruleForm">
      <el-form-item label="账号" prop="age">
         <el-input v-model="username"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="pass">
         <el-input type="password" v-model="pass" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
         <el-button type="primary" @click.parent="submitForm()">提交</el-button>
         <el-button @click="savePass">记住密码</el-button>
         <el-button @click="removePass">忘记密码</el-button>
      </el-form-item>
   </el-form>
</template>
   
<script>

import { userStors } from '../../stores/modules/user'
import { storeToRefs } from 'pinia'
/* Pinia */

import { useRoute, useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'

export default {
   setup() {
      var user = userStors()

      let username = ref(''), pass = ref('')

      function submitForm(formName) {
         let obj = { username: username.value, password: pass.value }
         // 重新获取到 input Content
         user.toLogin(obj)
         setTimeout(() => {
            location.reload()
         }, 100)
      }
      // *! 登录并且将账号密码 存储在 PINIA
      function savePass() {
         let obj = { username: username.value, password: pass.value }
         // 重新获取到 input Content
         let JsonData = JSON.stringify(obj)
         localStorage.setItem('userInfo', JsonData)
      }

      function removePass() {
         localStorage.removeItem('userInfo')
      }

      onMounted(() => {
         let fromDta = JSON.parse(localStorage.getItem('userInfo'))

         username.value = fromDta.username
         pass.value = fromDta.password

      })
      return { user, username, pass, submitForm, savePass, removePass }
   },
}
</script>
   
<style>
.el-form-item__content {
   justify-content: center;
}
</style>
   