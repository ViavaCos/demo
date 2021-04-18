<template>
  <div class="article-details">
    <h2 class="article-title">单例模式</h2>

    <p class="article-content">
      <code-card>
        {{ 'var a = 10;'.repeat(100) }}
      </code-card>
    </p>
  </div>
</template>

<script>
export default {
  name: "article-details",
  components: {
    'code-card': () => import('@/components/code-card')
  },
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