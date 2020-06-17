<template>
  <div class="main-nav-bar">
    <nav-bar v-bind="$attrs">
      <div
        :class="{ item: isitem, scrollitem: isscrollitem }"
        v-for="(item, index) in navBarItems"
        :key="index"
        @click="itemBtn(index)"
      >
        <span :class="{ active: index === currentIndex }">{{ item }}</span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  name: "MainNavBar",
  props: {
    navBarItems: {
      type: Array,
      default() {
        return [];
      }
    },
    isitem: {
      type: Boolean,
      default: true
    },
    isscrollitem: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentIndex: 0,
      inheritAttrs: false
    };
  },
  components: {
    NavBar
  },
  methods: {
    itemBtn(index) {
      this.currentIndex = index;
    }
  }
};
</script>

<style scoped>
.item {
  flex: 1;
  transform: skewX(45deg);
  color: #fff;
  text-align: center;
  cursor: pointer;
}
.scrollitem {
  flex: 1;
  color: #fff;
  text-align: center;
  cursor: pointer;
}
.active {
  background: transparent;
  border-bottom: 3px transparent solid;
  border-image: linear-gradient(
      to left,
      #b8cbb8 0%,
      #b8cbb8 0%,
      #ec09bb 0%,
      #cf6cc9 33%,
      #4a20aa 66%,
      #0f30eb 100%
    )
    1 10;
}
.active,
.item:hover,
.scrollitem:hover {
  text-shadow: 0.2rem 0rem 0.5rem #fff, -0.2rem 0rem 0.5rem #fff,
    0rem 0.2rem 0.5rem #fff, 0rem -0.5rem 0.5rem #fff;
}
</style>
