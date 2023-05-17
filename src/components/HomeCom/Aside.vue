<template>
   <div>
      <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
         <el-menu-item index="1-327">item one</el-menu-item>
         <!--  item -->
         <el-sub-menu v-for="(item, index)  in crr" :index="index" :key="index">
            <!-- menu -->
            <template #title>{{ item.name }}</template>
            <el-menu-item v-for="content, i in item.children" :index="content.name" :key="index">{{ content.name
            }}</el-menu-item>
            <!--  item -->
         </el-sub-menu>
      </el-menu>
      <a href=""></a>
   </div>
</template>

<script setup>
import { userStors } from '../../stores/modules/user'
import { onMounted, ref } from 'vue'
let store = userStors()

let crr = ref([])


async function amendList(arr) {
   let reslut = await store.getUserList()
   crr.value = reslut
}

amendList()

</script>

<style lang="scss" scoped>
.el-menu-vertical-demo {
   height: 93vh;
}
</style>