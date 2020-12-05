<template>
  <div class="sukula-tree">
    <canvas id="tree"></canvas>
    <canvas id="flower"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      treeColor: "#FFF", //树干颜色
      flowerColor: "rgba(255,192,203,.3)", //花色
      flowerColorDeep: "rgba(241,158,194,.5)", //花色深
      treeColor2: "rgba(255,192,203,.5)", //树枝颜色
      tCxt: {},
      cxt: {},
      limitSpeedY: 1, //速度上限
      limitSpeedX: 1, //速度上限
      g: 0.01, //重力加速度
      gWind: 0.005, //风力加速度
      rootTop: 800, //树起点
      flowerList: [], //樱花列表
      fallList: [] //飘落樱花列表
    };
  },
  methods: {
    initTree() {
      //两个canvas
      var tree = document.getElementById("tree");
      tree.width = window.innerWidth;
      tree.height = window.innerHeight;
      // var tCxt = tree.getContext("2d");
      this.tCxt = tree.getContext("2d");
      var flower = document.getElementById("flower");
      flower.width = window.innerWidth;
      flower.height = window.innerHeight;
      this.cxt = flower.getContext("2d");

      // var flowerList = [];//樱花列表
      // var rootTop = 450 ;//树起点
      // var flowerColor = "rgba(255,192,203,.3)" ;//花色
      // var flowerColorDeep = "rgba(241,158,194,.5)" ;//花色深
      // var treeColor2 = "rgba(255,192,203,.5)" ;//树枝颜色
      // var treeColor = "#FFF" ;//树干颜色
      // var fallList = [];//飘落樱花列表
      // var g = 0.01 ;//重力加速度
      // var gWind = 0.005;//风力加速度
      // var limitSpeedY = 1;//速度上限
      // var limitSpeedX = 1 ;//速度上限
      var len = this.flowerList.length;

      this.cxt.shadowColor = "#FFF";
      this.cxt.shadowBlur = 10;
      this.drawTree(tree.width / 4, this.rootTop, -Math.PI / 2, 42, 1); //执行
      requestAnimationFrame(this.step);
    },

    step() {
      var len = this.flowerList.length;
      if (Math.random() > 0.3)
        this.fallList.push(this.flowerList[Math.floor(Math.random() * len)]); //随机取出一个，花瓣复制到飘落花瓣的列表中

      this.cxt.clearRect(0, 0, tree.width, tree.height);
      for (var i = 0; i < this.fallList.length; i++) {
        if (this.fallList[i].sy < this.limitSpeedY)
          this.fallList[i].sy += this.g;
        this.fallList[i].sx += this.gWind;
        this.fallList[i].x += this.fallList[i].sx;
        this.fallList[i].y += this.fallList[i].sy;
        if (this.fallList[i].y > this.rootTop) {
          //飘到树根的花瓣移除
          this.fallList.splice(i, 1);
          i--;
          continue;
        }
        this.cxt.beginPath();
        this.cxt.fillStyle = this.fallList[i].color;
        this.fallList[i].deg += this.fallList[i].sx * 0.05; //跟速度相关的旋转花瓣
        this.cxt.arc(
          this.fallList[i].x,
          this.fallList[i].y,
          this.fallList[i].r,
          this.fallList[i].deg,
          this.fallList[i].deg + Math.PI * 1.3
        );
        this.cxt.fill();
      }
      requestAnimationFrame(this.step);
    },

    drawTree(x, y, deg, step, type) {
      var deg1 = step % 2 == 0 ? 0.1 : -0.1;
      var x1 = x + Math.cos(deg + deg1) * (step + 4) * 0.8; //以步长来判断枝干长度 x轴偏移大一些
      var y1 = y + Math.sin(deg + deg1) * (step - 1) * 0.8; //以步长来判断枝干长度 Y轴压缩一些
      this.tCxt.beginPath();
      this.tCxt.lineWidth = step / 3;
      this.tCxt.moveTo(x, y);
      this.tCxt.lineTo(x1, y1);
      this.tCxt.strokeStyle = step > 5 ? this.treeColor : this.treeColor2; //细纸条都换成花的颜色
      this.tCxt.stroke();
      if (step > 20) {
        //树干相交的位置有间隙，以一个圆填充
        this.tCxt.fillStyle = this.treeColor;
        this.tCxt.arc(x, y, step / 6, 0, Math.PI * 2);
        this.tCxt.fill();
      }
      if (step < 3 || (step < 23 && Math.random() > 0.1)) {
        //末梢位置 画花瓣
        var color = [this.flowerColorDeep, this.flowerColor, this.flowerColor][
          Math.round(Math.random() + 0.2)
        ];
        var r = 2 + Math.random() * 2;
        this.tCxt.fillStyle = color;
        this.tCxt.arc(
          x1 + Math.random() * 3,
          y1 + Math.random() * 3,
          r,
          0,
          Math.PI
        );
        this.tCxt.fill();
        this.flowerList.push({
          x: x,
          y: y,
          sx: Math.random() - 0.5,
          sy: 0,
          color: color,
          r: r,
          deg: deg
        }); //保存下画樱花的位置
      }
      step--;
      if (step > 0) {
        this.drawTree(x1, y1, deg, step, type);
        if (step % 3 == 1 && step > 0 && step < 35)
          this.drawTree(
            x1,
            y1,
            deg + 0.7 + 0.3 * Math.random(),
            Math.round(step / 1.13)
          ); //右分叉
        if (step % 3 == 0 && step > 0 && step < 35)
          this.drawTree(
            x1,
            y1,
            deg - 0.7 - 0.3 * Math.random(),
            Math.round(step / 1.13)
          ); //左分叉
      }
    }
  },

  mounted() {
    this.initTree();
  }
};
</script>

<style>
canvas {
  position: absolute;
  left: 0;
  top: 0;
}
.sukula-tree {
  width: 100%;
  height: 100%;
  background-color: #000;
}
</style>
