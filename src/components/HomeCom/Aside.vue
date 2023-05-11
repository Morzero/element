<template>
   <div>
      <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">


         <el-sub-menu index="1">
            <template #title>item four</template>
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item one</el-menu-item>
            <el-menu-item index="1-3">item one</el-menu-item>
            <el-menu-item index="1-4">item one</el-menu-item>
            <el-menu-item index="1-5">item one</el-menu-item>
            <el-menu-item index="1-6">item one</el-menu-item>
            <el-menu-item index="1-7">item one</el-menu-item>
         </el-sub-menu>
         <el-sub-menu index="2">
            <template #title>item four</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item one</el-menu-item>
            <el-menu-item index="2-3">item one</el-menu-item>
            <el-menu-item index="2-4">item one</el-menu-item>
            <el-menu-item index="2-5">item one</el-menu-item>
            <el-menu-item index="2-6">item one</el-menu-item>
            <el-menu-item index="2-7">item one</el-menu-item>
         </el-sub-menu>

      </el-menu>
   </div>
</template>
<script>



export default {
   setup() {


      return {}
   }
}
</script>

<style lang="scss" scoped></style>