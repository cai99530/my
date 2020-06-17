<template>
  <div class="home-header">
    <div class="c1">
      <div class="c1-1" ref="c11">
        <video
          id="v1"
          muted
          loop
          src="~assets/video/v1.mp4"
          style="object-fit:fill"
        ></video>
        <div class="c1-1-2">
          <img
            v-show="!isplay"
            src="~assets/image/home/header/play.svg"
            alt=""
            @mouseover="isPlay"
          />
          <img
            v-show="isplay"
            src="~assets/image/home/header/isplay.svg"
            alt=""
            @click.stop="FullPlay"
            @mouseout="isPlay"
          />
        </div>
      </div>
      <div
        class="c1-2"
        @click.stop="down"
        v-show="isdown"
        :class="{ c12default: isdefaultcss }"
      >
        <img src="~assets/image/home/header/down.svg" alt="" />
      </div>
      <div class="c2">
        <img src="~assets/image/home/1.png.png" alt="" />
      </div>
      <div class="c3">
        <a :title="title" @click="startmusic" href="javascript:void(0);">
          <img
            v-show="!muplay"
            src="~assets/image/home/header/music.svg"
            alt=""
          />
          <img
            v-show="muplay"
            src="~assets/image/home/header/musicplay.svg"
            alt=""
          />
        </a>
        <audio loop hidden id="a1">
          <source src="" type="audio/ogg" />
        </audio>
      </div>
    </div>
  </div>
</template>

<script>
import { openFullscreen } from "common/fullScreen.js";

export default {
  neme: "HomeHeader",
  props: {
    isdown: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      inheritAttrs: false,
      isplay: false,
      title: "播放音乐",
      muplay: false,
      timer: null,
      isdefaultcss: false
    };
  },
  components: {},
  methods: {
    down() {
      this.$emit("down");
    },
    isPlay() {
      this.isplay = !this.isplay;
    },
    FullPlay() {
      openFullscreen(document.getElementById("v1"));
    },
    startmusic() {
      const music = document.getElementById("a1");
      if (music.paused) {
        this.title = "暂停音乐";
        music.play();
      } else {
        this.title = "播放音乐";
        music.pause();
      }
      this.muplay = !this.muplay;
    }
  },
  mounted() {
    setTimeout(() => {
      const v1 = document.getElementById("v1");
      v1.play();
    }, 500);
  }
};
</script>

<style scoped>
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.4s ease;
}
.c1 {
  height: 1080px;
  width: 100vw;
  background: fixed no-repeat 0 -30px;
  background-size: 100% auto;
  background-image: url("~assets/image/home/header/bg.jpeg");
}

.c1-1 {
  height: 300px;
  width: 450px;
  overflow: hidden;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 45px;
  outline: none;
}
.c1-1:hover {
  transition: all 0.5s ease;
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
  );
}
video {
  height: 300px;
  width: 450px;
}
.c1-1-2 {
  height: 310px;
  width: 450px;
  position: relative;
  top: -310px;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  line-height: 340px;
  vertical-align: middle;
}
.c1-1-2 img:hover {
  cursor: pointer;
}

.c1-2 {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
}
.c1-2:hover {
  transition: 1s ease;
  margin-bottom: 20px;
  cursor: pointer;
}
.c12default {
  transition: all 1s;
  margin-bottom: 5px;
  cursor: pointer;
}

.c2 {
  position: relative;
  top: 420px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}

.c3 {
  width: 48px;
  height: 48px;
  position: fixed;
  top: 100px;
  left: 50px;
  cursor: pointer;
  z-index: 99;
}
</style>
