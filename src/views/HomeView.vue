<template>
  <div>
    <div class="common-layout">
      <el-container>
        <el-header>
          <!-- Header -->
          <div class="header">
            <Header />
          </div>
          <!-- Header -->
        </el-header>
        <el-container>
          <el-aside width="200px">
            <!-- Aside -->
            <Aside />
            <!-- Aside -->
          </el-aside>
          <el-main>Main</el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>

import Aside from '@/components/HomeCom/Aside.vue'
import Header from '@/components/HomeCom/Header.vue'

export default {
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>