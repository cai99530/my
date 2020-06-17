<template>
  <div class="home-main">
    <div class="main">
      <div class="main1 main1-filter"></div>
      <div class="main1-1">
        <!-- <test v-bind="$attrs"></test> -->
        <div class="container">
          <div
            class="box"
            v-for="(item, index) in homemain1images"
            :key="index"
          >
            <img :src="item.img" alt="" />
          </div>
        </div>
        <img
          style="width:500px;height:250px;overflow:auto;position:absolute;top:-50px;left: -250px;z-index:-1;"
          src="~assets/image/home/main/item1-6.png"
          alt=""
        />
        <img
          style="width:300px;height:250px;overflow:auto;position:relative;top:-400px;left: 1000px;z-index:-1;"
          src="~assets/image/home/main/item1-5.png"
          alt=""
        />
      </div>
    </div>
    <div class="main">
      <div class="main2 main2-filter" />
      <div class="main2-1">
        <div class="swiper">
          <el-carousel :interval="4000" type="card" height="400px" width="100%">
            <el-carousel-item
              v-for="(item, index) in homemain2images"
              :key="index"
            >
              <img :src="item" alt="" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="card">
          <div class="header">
            <div class="left">
              <div
                style=" width:100%;border-top:4px black solid;margin-top:23px;margin-left:30%"
              ></div>
            </div>
            <div class="title">
              <p>你，不再是自己</p>
            </div>
          </div>
          <div class="footer">
            <p>
              《赛博朋克2077》是一款开放世界动作冒险游戏，故事发生在夜之城。这是一座五光十色的大都会，权力更
              迭和身体改造是不变的主题。您扮演一名野心勃勃的雇佣兵：V，正在追寻一种独一无二的植入体。只要得到它，
              就能掌握获得永生的关键。您可以自定义角色的义体、技能和玩法，探索包罗万象的城市。您做出的选择也将会
              对剧情和周遭的世界产生影响。
            </p>
            <p class="more">了解更多 ></p>
          </div>
        </div>
        <div class="info">
          <div class="top">
            <p>
              化身装备机械强化义体的城市雇佣兵，成为一名赛博朋克，在夜之城的街头谱写属于您的传奇。
            </p>
            <p class="more">了解更多 ></p>
          </div>
          <div class="bottom">
            <p>
              进入夜之城的庞大开放世界。在这里，视觉效果、复杂程度和游戏深度都将得到全新的定义。
            </p>
            <p class="more">了解更多 ></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
// import Test from "./Test.vue";
export default {
  name: "HomeMain",
  props: {
    homemain1images: {
      type: Array,
      default() {
        return [];
      }
    },
    homemain2images: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      inheritAttrs: false
      // ccq: [
      //   require("../../../assets/image/home/main/item1-1.png"),
      //   require("../../../assets/image/home/main/item1-1.png"),
      //   require("../../../assets/image/home/main/item1-1.jpg"),
      //   require("../../../assets/image/home/main/item1-1-1.png"),
      //   require("../../../assets/image/home/main/item1-1.png"),
      //   require("../../../assets/image/home/main/item1-1.jpg"),
      //   require("../../../assets/image/home/main/item1-1.jpg"),
      //   require("../../../assets/image/home/main/item1-1-1.png"),
      //   require("../../../assets/image/home/main/item1-1.png"),
      //   require("../../../assets/image/home/main/item1-1.jpg"),
      //   require("../../../assets/image/home/main/item1-1.jpg"),
      //   require("../../../assets/image/home/main/item1-1.jpg"),
      //   require("../../../assets/image/home/main/item1-1-1.png"),
      //   require("../../../assets/image/home/main/item1-1.png"),
      //   require("../../../assets/image/home/main/item1-1.png")
      // ]
    };
  },
  components: {
    // Test
  },
  methods: {}
};
</script>

<style scoped>
.home-main {
  overflow: hidden;
}
.main {
  height: 1080px;
  width: 100%;
}
.main1 {
  height: 1080px;
  width: 100%;
  background: -1000px -500px;
  position: absolute;
  top: 1080px;
  background-image: url("~assets/image/home/main/main1-3.jpg");
}
/* .item img {
  height: auto;
  width: 200px;
  overflow: hidden;
} */
.main1-filter,
.main2-filter {
  filter: brightness(0.3);
}
.main1-1 {
  height: 50%;
  width: 70%;
  color: #fff;
  position: relative;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
}
.container {
  width: 100%;
  margin: 20 auto;
  columns: 5;
  column-gap: 40px;
}
.container .box {
  width: 100%;
  margin: 0 0 20px;
  padding: 10px;
  overflow: hidden;
  break-inside: avoid;
}
.container .box img {
  width: 180px;
}
@media (max-width: 1200px) {
  .container {
    columns: 3;
    width: calc(100% - 40px);
    box-sizing: border-box;
    padding: 20px 20px 20px 0;
  }
}
@media (max-width: 768px) {
  .container {
    columns: 2;
  }
}
@media (max-width: 520px) {
  .container {
    columns: 1;
  }
}

.main2 {
  height: 100%;
  width: 100%;
  background-image: url("~assets/image/home/main/main1-2.jpeg");
}
.main2-1 {
  height: 100%;
  width: 70%;
  color: #fff;
  padding-top: 15px;
  position: relative;
  left: 50%;
  top: -1080px;
  transform: translateX(-50%);
}

.swiper {
  height: 430px;
  width: 80%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.swiper img {
  height: 100%;
  width: 100%;
  overflow: auto;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.card {
  height: 400px;
  width: 40%;
  background-color: deepskyblue;
  color: black;
  position: absolute;
  top: 550px;
  left: 3%;
  font-size: 30px;
  padding-top: 40px;
  -webkit-clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 10%);
  clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 10%);
}

.card:hover {
  background-color: #fff;
  cursor: pointer;
}

.header {
  height: 50px;
  width: 100%;
  display: flex;
  overflow: hidden;
}
.left {
  height: 50px;
  width: 80px;
}
.title {
  flex: 1;
  text-align: center;
  line-height: 50px;
  vertical-align: middle;
  overflow: hidden;
}
.footer {
  height: 310px;
  width: 100%;
  font-size: 18px;
  padding: 40px;
  float: left;
  word-wrap: break-word;
  word-break: normal;
}
.info {
  height: 400px;
  width: 50%;
  padding: 3%;
  position: absolute;
  top: 550px;
  right: 3%;
}
.top,
.bottom {
  height: 45%;
  width: 100%;
  font-size: 18px;
  background-color: black;
  color: #fff;
  padding: 30px;
}
.bottom {
  margin-top: 5%;
}
.top:hover,
.bottom:hover {
  background-color: #fff;
  color: black;
  cursor: pointer;
}
.more {
  float: right;
  margin-top: 5%;
}
.more:hover {
  color: deepskyblue;
  cursor: pointer;
}
</style>
