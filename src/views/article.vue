<template>
  <div class="my-article">
    <article-card v-for="num in 6" :key="num"></article-card>
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
};
</script>

<style lang="less" scoped>
</style>