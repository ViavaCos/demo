<template>
  <div class="article-card" @click="toDetail">
    <p class="card-title text-overflow">标题</p>
    <p class="card-content">{{ "这是内容 ".repeat(150) }}</p>
  </div>
</template>

<script>
export default {
  name: "ArticleCard",
  methods: {
    //  查看文章详情
    toDetail() {
      this.$router.push({
        path: '/article-details',
        query: {
          article_id: 1, // 文章id
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
.article-card {
  width: 100%;
  height: 300px;
  margin-top: 15px;
  padding: 15px;
  text-align: left;
  box-shadow: #fff 0 0 10px 0px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;

  .card-title {
    font-size: 28px;
  }
  .card-content {
    margin-top: 20px;
    height: 210px;
    overflow: hidden;
    font-size: 16px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 10;
  }
}

@media screen and (max-width: 515px) {
  .article-card {
    height: 150px;
    .card-content {
      height: 60px;
      -webkit-line-clamp: 3;
    }
  }
}

.text-overflow {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
