<template>
  <div class="design-module">
      <article-card title="单例模式" @click="$router.push('/article-details')">123</article-card>
  </div>
</template>

<script>
export default {
    name: 'DesignModule',
    components: {
        'article-card': () => import('@/components/article-card')
    }
}
</script>

<style>

</style>