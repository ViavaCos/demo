<template>
  <div class="home">
      <div class="viavacos"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.home {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  opacity: .2;
}
.viavacos {
  width: 175px;
  height: 175px;
  border-top: 175px solid chartreuse;
  border-left: 175px dashed rgb(0, 255, 255);
  border-right: 175px dotted greenyellow;
  border-bottom: 175px solid skyblue;
  border-radius: 50%;
  transition: all 1s linear 0.2s;
}
</style>