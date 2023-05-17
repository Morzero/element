<template>
   <div class="header">
      <div class="father">
         <button @click="exit">退出登录</button>
      </div>
      <el-breadcrumb class="foodRouter" separator="/">
         <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
         <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
         <el-breadcrumb-item>promotion list</el-breadcrumb-item>
         <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
      </el-breadcrumb>
   </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
   setup() {
      let router = useRouter()
      function exit() {
         localStorage.removeItem('token')
         location.reload()
      }

      return { exit }
   }
}
</script>

<style lang="scss" scoped>
.foodRouter {
   line-height: 60px;
}

.header {
   display: flex;

   .father {
      width: 210px;
      position: relative;

      button {

         padding: 8px 15px;
         font-weight: 18px;
         position: absolute;
         top: 50%;
         left: 25%;
         transform: translate(-50%, -50%);
      }
   }
}
</style>