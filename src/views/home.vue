<template>
  <div class="home">
      <div class="viavacos"></div>
      <p v-if="isMobile" style="margin-top: 10px;">Sorry, this site not support Mobile Device yet.</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isMobile: false // 是否为移动端
    }
  },
  mounted () {
    this.isMobile = document.body.offsetWidth <= 515
  }
}
</script>

<style lang="less" scoped>
.home {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: .2;
}
.viavacos {
  width: 175px;
  height: 175px;
  border-top: 175px solid chartreuse;
  border-left: 175px dashed rgb(0, 255, 255);
  border-right: 175px dotted greenyellow;
  border-bottom: 175px solid skyblue;
  border-radius: 50%;
  transition: all 1s linear 0.2s;
}

@media screen and (max-width: 515px) {
  .viavacos {
    width: 50px;
    height: 50px;
    border-top: 50px solid chartreuse;
    border-left: 50px dashed rgb(0, 255, 255);
    border-right: 50px dotted greenyellow;
    border-bottom: 50px solid skyblue;
    border-radius: 50%;
    transition: all 1s linear 0.2s;
  }
}
</style>