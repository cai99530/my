<template>
  <div id="home">
    <main-nav-bar
      :navBarItems="navBarItems"
      :isnavBar="isnavBar"
      :isscrollNav="isscrollNav"
      :isitem="isitem"
      :isscrollitem="isscrollitem"
    ></main-nav-bar>
    <home-header :isdown="isdown" @down="down"></home-header>
    <home-main v-bind="{ homemain1images, homemain2images }"></home-main>
    <back-top v-show="showBackTop" @click.native="backtop"></back-top>
    <div class="footer">
      <a href="https://cdprojektred.com" target="_blank">
        <img
          src="https://cyberpunk.gog-statics.com/build/images/CDProjektRed-White-ddc054ff.svg"
          alt="CD Projekt Red"
        />
      </a>
      <a href="https://space.bilibili.com/271442527/#/" target="_blank">
        <img src="~assets/image/home/footer/blbl.jpg" alt="" />
      </a>
    </div>
  </div>
</template>

<script>
import MainNavBar from "components/content/MainNavBar.vue";
import HomeHeader from "./childComponents/HomeHeader.vue";
import HomeMain from "./childComponents/HomeMain.vue";
import BackTop from "components/content/backTop/BackTop.vue";
// import Test from "./childComponents/Test.vue";

export default {
  name: "Home",
  data() {
    return {
      navBarItems: [
        "GAME INFO",
        "STORY",
        "COMMUNITY",
        "ESPORTS",
        "SYSTEM",
        "PROFILE"
      ],
      saveY: 0,
      isnavBar: true,
      isscrollNav: false,
      isitem: true,
      isscrollitem: false,
      timer1: true,
      timer2: true,
      showBackTop: false,
      isdown: true,
      homemain1images: [
        { img: require("../../assets/image/home/main/item1-1.png") },
        { img: require("../../assets/image/home/main/item1-1.png") },
        { img: require("../../assets/image/home/main/item1-1.jpg") },
        { img: require("../../assets/image/home/main/item1-1-1.png") },
        { img: require("../../assets/image/home/main/item1-1.png") },
        { img: require("../../assets/image/home/main/item1-1.jpg") },
        { img: require("../../assets/image/home/main/item1-1-1.png") },
        { img: require("../../assets/image/home/main/item1-1-1.png") },
        { img: require("../../assets/image/home/main/item1-1.png") },
        { img: require("../../assets/image/home/main/item1-1.jpg") },
        { img: require("../../assets/image/home/main/item1-1-1.png") },
        { img: require("../../assets/image/home/main/item1-1-1.png") },
        { img: require("../../assets/image/home/main/item1-1.png") },
        { img: require("../../assets/image/home/main/item1-1.jpg") },
        { img: require("../../assets/image/home/main/item1-1.jpg") },
        { img: require("../../assets/image/home/main/item1-1.jpg") }
      ],
      homemain2images: [
        require("../../assets/image/home/main/item2-1.jpg"),
        require("../../assets/image/home/main/item2-2.jpg"),
        require("../../assets/image/home/main/item2-3.jpg"),
        require("../../assets/image/home/main/item2-4.jpg"),
        require("../../assets/image/home/main/item2-5.jpg"),
        require("../../assets/image/home/main/item2-6.jpg")
      ]
    };
  },
  components: {
    MainNavBar,
    HomeHeader,
    HomeMain,
    BackTop
    // Test
  },
  mounted() {
    window.addEventListener("scroll", this.windowScroll);
  },
  methods: {
    windowScroll() {
      let Y =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.saveY = Y;
      // console.log(this.saveY);
      if (Y > 100) {
        this.isdown = false;
      } else {
        this.isdown = true;
      }
      this.showBackTop = Y > 1100 ? true : false;
      if (Y >= 1030 && this.timer1) {
        this.isnavBar = !this.isnavBar;
        this.isscrollNav = !this.isscrollNav;
        this.isitem = !this.isitem;
        this.isscrollitem = !this.isscrollitem;
        this.timer1 = false;
        this.timer2 = true;
      }
      if (Y <= 1030 && !this.timer1 && this.timer2) {
        this.isnavBar = !this.isnavBar;
        this.isscrollNav = !this.isscrollNav;
        this.isitem = !this.isitem;
        this.isscrollitem = !this.isscrollitem;
        this.timer2 = false;
        this.timer1 = true;
      }
    },
    backtop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    down() {
      window.scrollTo({
        top: 1036,
        behavior: "smooth"
      });
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.windowScroll); //销毁滚动事件
  }
};
</script>

<style scoped>
#home {
  height: 100vh;
  width: 100vw;
  position: relative;
}

.footer {
  height: 150px;
  width: 100%;
  background-color: black;
  position: relative;
  bottom: 0;
  padding: 30px;
  overflow: hidden;
  text-align: center;
  line-height: 150px;
  vertical-align: middle;
}
.footer img {
  width: 150px;
  height: 80px;
  overflow: auto;
}
</style>
