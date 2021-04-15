<template>
  <div class="home">
    <div class="card-wrap">
      <template v-if="hideMenu" >
        <p class="content-text">Welcome</p>
        <p class="author-text" @click="showMenu">click here</p>
      </template>

      <template v-else>
        <p class="menu-title">菜单</p>

        <p class="menu-item" @click="$router.push('/article')">看文章</p>
        <p class="menu-item" @click="$router.push('/regexp')">学正则</p>
        <p class="menu-item" v-for="num in 5" :key="num">{{ '菜单项' }}</p>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      hideMenu: true // 隐藏菜单
    };
  },
  methods: {
    showMenu () {
      this.hideMenu = false
    }
  },
  created() {
    if(!window.sessionStorage.getItem('has_view')) {
      window.sessionStorage.setItem('has_view', 1)
    } else {
      this.hideMenu = false
    }
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
  .card-wrap {
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
      color: #fff;
    }

    .menu-title,
    .menu-item {
      font-size: 20px;
      color: #fff;
    }
    .menu-title {
      margin-bottom: 40px;
      border-bottom: 1px solid #fff;
    }
    .menu-item {
      margin-bottom: 20px;
      &:active {
        color: #ccc;
      }
    }
  }
}

@media screen and (max-width: 515px) {
  .home .card-wrap {
    overflow: hidden;
    .content-text {
      font-size: 60px;
      line-height: 6.5;
    }
  }
}
</style>