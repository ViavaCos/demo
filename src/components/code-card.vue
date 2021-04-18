<template>
  <div class="code-card">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'CodeCard'
}
</script>

<style lang="less" scoped>
.code-card{
    font-size: 12px;
    text-indent: 0;
    padding: 10px;
    border-radius: 5px;
    color: #fff;
    background-color: #000;
}
</style>