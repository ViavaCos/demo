<template>
  <div class="article-details">
    <h2 class="article-title">文章标题</h2>

    <p class="article-content">{{ "文章内容 ".repeat(500) }}</p>
  </div>
</template>

<script>
export default {
  name: "article-details",
  data() {
    return {
      id: "",
    };
  },
  created() {
    this.id = this.$route.query.article_id;
  },
};
</script>

<style lang="less" scoped>
.article-details {
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  box-shadow: #fff 0 0 10px 0px;

  .article-title {
    font-size: 30px;
  }
  .article-content {
    margin-top: 20px;
    text-indent: 2em;
    text-align: left;
    font-size: 16px;
  }
}
</style>