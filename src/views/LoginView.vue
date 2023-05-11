<template>
   <div>
      <div class="from-box">
         <fromMenu />
      </div>
   </div>
</template>

<script setup>
import fromMenu from '../components/loginView/from.vue'
</script>

<style lang="scss" scoped>
* {
   margin: 0;
   padding: 0;
}

.from-box {
   width: 400px;
   height: 200px;
   background-color: rgb(255, 255, 255);
   margin: 300px auto;
   padding: 20px;
   border: 1px solid rgb(218, 218, 218);
   border-radius: 20px;
   transform: scale(1.3);
}
</style>