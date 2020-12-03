<template>
  <div class="throttle">
    <h2>debounce</h2>
    <button @click="debounce(log, 300)()">防抖</button>
    <br />
    <br />
    <h2>throttle</h2>
    <button @click="throttle(log, 1000)()">节流</button>
    <br />
    <br />
    <button @click="throttleRightNow(log, 1000)()">节流立即执行版</button>
    <br>
    <br>
    <!-- <br> -->
<div class="text-overflow tl">
    <p class="text-item">1、这是一段文字一段文字一段文字</p>
    <p class="text-item">2、这是一段文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字</p>
    <p class="text-item">3、这是一段文字一段文字一段文字</p>
    <p class="text-item">4、这是一段文字一段文字一段文字</p>
</div>
    <br>
    <br>
    <br>
<div class="ul-text-wrap">
    <ul class="ul-text tl">
        <li>这是一段文字一段文字一段文字</li>
        <li>这是一段文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字这是一段文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字</li>
        <li>这是一段文字一段文字一段文字</li>
        <li>这是一段文字一段文字一段文字</li>
    </ul>
</div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null, // 定时器标识
      valid: null, // 节流阀门
    };
  },
  methods: {
    // 防抖
    debounce(fn, delay) {
      //   let timer = null;
      return () => {
        if (this.timer) {
          clearTimeout(this.timer);
          this.timer = setTimeout(fn, delay);
        } else {
          this.timer = setTimeout(fn, delay);
        }
      };
    },

    signature() {
      document.write("张三");
    },

    // 节流
    throttle(fn, delay) {
      //   let valid = null;
      return () => {
        if (this.valid) {
          return false;
        }
        this.valid = true;
        setTimeout(() => {
          fn();
          this.valid = false;
        }, delay);
      };
    },

    // 节流立即执行版
    throttleRightNow(fn, delay) {
        //   let valid = null;
        return () => {
        if (this.valid) {
            return false;
        }
        this.valid = true;
        fn();
        setTimeout(() => {
            this.valid = false;
        }, delay);
        };
    },

    // 打印log
    log() {
      console.log("执行", this.getCurrentTime());
      setTimeout(() => {
        console.log("延迟执行", this.getCurrentTime());
      }, 200);
    },

    // 获取当前时间（格式化后）
    getCurrentTime() {
      let dateArr = new Date().toISOString().split("T");
      return dateArr[0] + " " + dateArr[1].substring(0, 8);
    },
  },
};
</script>

<style lang="less" scoped>
.tl {
    text-align: left;
}
.text-overflow {
    padding: 24px 12px;
    width: 500px;
    background-color: #f2f2f2;
    box-sizing: border-box;
    .text-item {
        margin-left: 1.5em;
        text-indent: -1.5em;
    }
}
.ul-text-wrap {
    padding: 24px 12px;
    width: 500px;
    background-color: #f2f2f2;
    box-sizing: border-box;
}
.ul-text li {
    margin: 16px 0;
}
</style>