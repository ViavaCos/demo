<template>
  <div class="regexp">
      <article-card title="什么是正则表达式">
          摘抄自MDN的说法就是"正则表达式是用于匹配字符串中字符组合的模式。在 JavaScript中，正则表达式也是对象。这些模式被用于 <code>RegExp</code> 的 exec 和 test 方法, 以及 String 的 match、matchAll、replace、search 和 split 方法。本章介绍 JavaScript 正则表达式。"
      </article-card>
  </div>
</template>

<script>
export default {
    name: 'regexp',
    components: {
        'article-card': () => import('../components/article-card')
    },
    data(){
        return {

        }
    }
}
</script>

<style>

</style>