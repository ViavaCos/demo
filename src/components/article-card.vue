<template>
  <div class="article-card" @click="$emit('click')">
    <p class="card-title text-overflow">{{ title }}</p>
    <p class="card-content">
      <slot>{{ "这是内容 ".repeat(150) }}</slot>
    </p>
  </div>
</template>

<script>
export default {
  name: "ArticleCard",
  props:{
    title: { type: String, default: '标题' }
  }, 
  methods: {

  },
};
</script>

<style lang="less" scoped>
.article-card {
  width: 100%;
  max-height: 300px;
  margin-bottom: 15px;
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
    text-indent: 2em;
    line-height: 1.5;
    margin-top: 20px;
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
