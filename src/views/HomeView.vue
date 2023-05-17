<template>
  <div>
    <div class="common-layout">
      <el-container>
        <el-header>
          <!-- Header -->
          <Header />
          <!-- Header -->
        </el-header>
        <el-container>
          <el-aside class="elAside" width="210px">
            <!-- Aside -->
            <Aside />
            <!-- Aside -->
          </el-aside>
          <el-main class="elMain">Main</el-main>
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

<style lang="scss" scoped>
.el-header {
  border-bottom: 1px solid rgb(200, 200, 200);
  padding: 0;
}

.header {
  display: flex;
  height: 60px;
  overflow: hidden;
}

.elMain {
  padding: 0;
}
</style>