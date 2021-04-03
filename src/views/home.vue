<template>
  <div class="home">
      <article-card v-for="num in 6" :key="num"></article-card>

      <div class="home-footer"></div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    'article-card': () => import('../components/article-card')
  },
  data(){
    return {
      
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  position: relative;
  z-index: 1;
  width: 80%;
  margin: 0 auto 20px;
  min-height: 80vh;

  .home-footer {
    height: 48px;
  }
}

</style>