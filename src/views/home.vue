<template>
  <div class="home">
    <div class="welcome">
      <p class="content-text">Welcome</p>
      <p class="author-text">- ViavaCos</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  background-color: rgba(255, 295, 295, 0.9);
  border-radius: 15px 15px 0 0;
  box-shadow: #fff 0 0 10px 0px;
  .welcome {
    width: 100%;
    height: 80vh;
    background-color: rgba(0, 0, 0, 0.5);
    .content-text {
      font-size: 200px;
      line-height: 2.5;
      color: #fff;
    }
    .author-text {
      font-size: 35px;
      text-indent: 20em;
      color: #fff;
    }
  }
}

@media screen and (max-width: 515px) {
  .home .welcome {
    overflow: hidden;
    .content-text {
      font-size: 60px;
      line-height: 7;
    }
  }
}
</style>