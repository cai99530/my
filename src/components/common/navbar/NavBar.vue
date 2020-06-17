<template>
  <div :class="{ navbar: isnavBar, scrollnav: isscrollNav }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    isnavBar: {
      type: Boolean,
      default: true
    },
    isscrollNav: {
      type: Boolean,
      default: false
    }
  },
};
</script>

<style scoped>
.navbar {
  transition: .5s ease;
  height: 44px;
  width: 70%;
  background-image: linear-gradient(
    to right,
    #b8cbb8 0%,
    #b8cbb8 0%,
    #ec09bb 0%,
    #cf6cc9 33%,
    #4a20aa 66%,
    #0f30eb 100%
  );
  transform: skewX(-45deg);
  display: flex;
  line-height: 44px;
  vertical-align: middle;
  mix-blend-mode: hard-light;
  overflow: hidden;
  position: fixed;
  top: 0px;
  left: 15%;
  z-index: 999;
}

.scrollnav {
  transition: .5s linear;
  height: 44px;
  width: 100%;
  background-image: linear-gradient(
    to right,
    #b8cbb8 0%,
    #b8cbb8 0%,
    #ec09bb 0%,
    #cf6cc9 33%,
    #4a20aa 66%,
    #0f30eb 100%
  );
  opacity: 1;
  display: flex;
  line-height: 44px;
  vertical-align: middle;
  overflow: hidden;
  position: fixed;
  top: 0px;
  z-index: 999;
}
</style>
