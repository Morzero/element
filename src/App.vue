<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { onMounted } from 'vue';
export default {
  setup() {
    function timeOut() {
      const now = new Date();
      const expirationDate = new Date(localStorage.getItem('expirationDate'));

      if (now > expirationDate) {
        localStorage.removeItem('key');
        localStorage.removeItem('expirationDate');
      }
    }
    // 登录有效期
    onMounted(() => {
      timeOut()
    })
    return {

    }
  }
}
</script>

<style lang="scss" scoped></style>