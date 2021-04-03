<template>
  <div class="v-layout">
    <div class="v-header">
      <div class="left" @click="$router.push('/home')">
        <div class="viavacos" @click="showMenu"></div>
        <div class="title">ViavaCos</div>
      </div>
      <div v-if="!isMobile" class="time">{{ currentTime }}</div>
    </div>

    <div class="v-content">
      <div class="viavacos-back"></div>
      <div class="cur-router-view">
        <router-view></router-view>
      </div>
      <!-- <router-view v-if="!isMobile"></router-view> -->
      <!-- <p v-else style="margin-top: 200px">
        Sorry, this site not support Mobile Device yet.
      </p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "V",
  data() {
    return {
      isMobile: false,
      timer: null, // 定时器标识
      currentTime: "", // 当前时间
    };
  },

  created() {
    this.getCurrentTime();
  },

  mounted() {
    this.isMobile = document.body.offsetWidth <= 515;
  },

  methods: {
    // 获取当前时间
    getCurrentTime() {
      let _this = this;
      this.timer = setInterval(() => {
        let d = new Date();
        let HH = d.getHours();
        let MM = d.getMinutes();
        let SS = d.getSeconds();
        _this.currentTime = `
        ${HH < 10 ? "0" + HH : HH}:
        ${MM < 10 ? "0" + MM : MM}:
        ${SS < 10 ? "0" + SS : SS}`;
      }, 1000);
    },

    showMenu() {
      if (!this.isMobile) return;
    },
  },

  beforeDestroy() {
    this.timer && clearInterval(this.timer);
  },
};
</script>

<style lang="less" scoped>
* {
  color: #aed4d6;
}

.v-header {
  position: relative;
  width: 100%;
  height: 48px;
  display: flex;
  padding: 4px;
  justify-content: space-between;
  width: 100%;
  background-color: #788292;
  box-sizing: border-box;
  text-shadow: 1px 1px 2px #00d096;
  .left {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .time,
  .title {
    font-size: 30px;
    text-align: left;
  }
}

.v-content {
  display: flex;
  justify-content: center;
  width: 100%;
  overflow-x: auto;
  height: calc(100vh - 48px);
  background-color: #05080d;
}
.cur-router-view {
  position: relative;
  width: 100%;
  padding: 20px 20px 0;
}
.viavacos-back {
  position: absolute;
  opacity: 0.4;
  content: "";
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 175px;
  height: 175px;
  border-top: 175px solid chartreuse;
  border-left: 175px dashed rgb(0, 255, 255);
  border-right: 175px dotted greenyellow;
  border-bottom: 175px solid skyblue;
  border-radius: 50%;
  transition: all 1s linear 0.2s;
  // box-shadow: inset #fff 0 0 0px 200px;
  // background: blanchedalmond;
}

.viavacos {
  width: 10px;
  height: 10px;
  border-top: 10px solid chartreuse;
  border-left: 10px dashed rgb(0, 255, 255);
  border-right: 10px dotted greenyellow;
  border-bottom: 10px solid skyblue;
  border-radius: 50%;
  margin-right: 10px;
}

@media screen and (max-width: 515px) {
  .v-header {
    height: 29px;
    .title {
      font-size: 16px;
    }
  }
  .v-content {
    height: calc(100vh - 29px);
  }
  .viavacos {
    width: 6px;
    height: 6px;
    border-top: 6px solid chartreuse;
    border-left: 6px dashed rgb(0, 255, 255);
    border-right: 6px dotted greenyellow;
    border-bottom: 6px solid skyblue;
  }
  .viavacos-back {
    width: 50px;
    height: 50px;
    border-top: 50px solid chartreuse;
    border-left: 50px dashed rgb(0, 255, 255);
    border-right: 50px dotted greenyellow;
    border-bottom: 50px solid skyblue;
  }
}
</style>