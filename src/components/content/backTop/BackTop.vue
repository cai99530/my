<template>
  <div class="back-top">
    <img src="~assets/image/home/backtop.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'BackTop'
}
</script>

<style scoped>
.back-top{
  position: fixed;
  bottom: 49px;
  right: 20px;
  z-index: 9;
}
.back-top:hover{
  transition: all .5s ease;
  margin-bottom: 20px;
  cursor: pointer;
}

</style>
