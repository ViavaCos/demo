<template>
  <div class="home-layout">
      <div class="home">
          HOME
          <div class="time">{{ currentTime }}</div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'V',
    data (){
        return {
            timer: null, // 定时器标识
            currentTime: '' // 当前时间
        }
    },

    created () {
        this.getCurrentTime()
    },

    methods: {
        // 获取当前时间
        getCurrentTime () {
            let _this = this
            this.timer = setInterval(() => {
                let d = new Date()
                let HH = d.getHours()
                let MM = d.getMinutes()
                let SS = d.getSeconds()
                _this.currentTime = `${HH}:${MM}:${SS}`
            }, 1000)
        }
    },

    beforeDestroy () {
        this.timer && clearInterval(this.timer)
    }
}
</script>

<style lang="less" scoped>
* { color:#aed4d6 }
.home-layout {
    position: relative;
    min-width: 100vw;
    min-height: 100vh;
    padding: 20px 10px;
    background-color: #222;
}
.home {
    padding: 0 10px;
    min-width: 100vw;
    min-height: 100vh;
    position: absolute;
    background-color: #05080d;
    box-sizing: border-box;
    .time {
        text-align: left;
        font-size: 30px;
    }
}

</style>