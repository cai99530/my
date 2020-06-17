<template>
  <div class="test">
    <waterfall :col="col" :data="data">
      <template>
        <div
          class="cell-item"
          v-for="(item, index) in homemain1images"
          :key="index"
        >
          <img :src="item.img" />
        </div>
      </template>
    </waterfall>
  </div>
</template>

<script>
export default {
  name: "Test",
  props: {
    homemain1images: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      // data: [
      //   { img: require("@/assets/image/home/main/item1-1.png") },
      //   { img: require("@/assets/image/home/main/item1-1.jpg") },
      //   { img: require("@/assets/image/home/main/item1-1.png") },
      //   { img: require("@/assets/image/home/main/item1-1.png") },
      //   { img: require("@/assets/image/home/main/item1-1.jpg") },
      //   { img: require("@/assets/image/home/main/item1-1.png") },
      //   { img: require("@/assets/image/home/main/item1-1.jpg") }
      // ],
      col: 5,
      data: []
    };
  }
};
</script>

<style>
.test {
  height: 1080px;
  width: 100%;
  overflow: hidden;
}
.cell-item {
  overflow: hidden;
}
.cell-item img {
  width: 180px;
  margin-bottom: 8%;
}
.cell-item img:hover {
  /* transition: all 0.5s ease;
  background: transparent;
  border: 3px transparent solid;
  background-image: linear-gradient(
    to left,
    #b8cbb8 0%,
    #b8cbb8 0%,
    #ec09bb 0%,
    #cf6cc9 33%,
    #4a20aa 66%,
    #0f30eb 100%
  ); */
  transition: all 1s linear;
  transform: scale(0.8);
  cursor: pointer;
}
</style>
