<template>
  <div class="my-article">
    <article-card v-for="num in 6" :key="num" @click="toDetail"></article-card>
  </div>
</template>

<script>
export default {
  name: "my-article",
  components: {
    "article-card": () => import("../components/article-card"),
  },
  data() {
    return {};
  },
  methods:{
    //  查看文章详情
    toDetail() {
      this.$router.push({
        path: '/article-details',
        query: {
          article_id: 1, // 文章id
        },
      });
    }
  }
};
</script>

<style lang="less" scoped>
</style>