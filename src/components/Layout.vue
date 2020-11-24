<template>
    <div class="layout-wrap">

        <div class="layout-header">
            <div class="viavacos"></div>
            <span class="website-title">ViavaCos</span>
        </div>


        <div class="layout-main">
            <div class="layout-sider">
                <el-menu
                    default-active="2"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#d1fdfb"
                    text-color="#000"
                    active-text-color="#ffd04b">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                        </template>
                    </el-submenu>
                        <el-menu-item index="1-1" @click="$router.push('/animate')">animate</el-menu-item>
                        <el-menu-item index="1-2" @click="$router.push('/throttle')">此行缩进对齐+防抖节流</el-menu-item>
                        <el-menu-item index="1-3" @click="$router.push('/sukula')">sukula</el-menu-item>
                        <el-menu-item index="1-4" @click="$router.push('/login')">登录</el-menu-item>
                    <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="3" disabled>
                    <i class="el-icon-document"></i>
                    <span slot="title">导航三</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title" @click="handleClickArea">区域选择</span>
                    </el-menu-item>
                </el-menu>
            </div>

            <div class="layout-content">
            <router-view></router-view>
            </div>

        </div>
    </div>
</template>

<script>
import picker from '@/components/area-picker/picker'

export default {
  data () {
    return {}
  },

  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClickArea () {
      // picker.show()
    }
  }
}
</script>

<style lang="less" scoped>
@import './area-picker/picker.css';

.layout-wrap {
  min-height: 100vh;
}

.layout-header {
  display: flex;
  height: 100px;
  line-height: 75px;
  padding: 12.5px;
  box-sizing: border-box;
  background-color: #d1fdfb;
  border-bottom: 1px solid #03d3ff;
  .website-title {
    margin-left: 12px;
    font-size: 45px;
  }
}
.layout-sider {
  width: 310px;
  background-color: #d1fdfb;
  .el-menu {
    border: 0 none;
  }
}

.layout-main {
  width: 100%;
  min-height: calc(100vh - 100px);
  display: flex;
}
.layout-content {
  position: relative;
  flex: 1;
  background-color: #fff;
  overflow-y: auto;
}



.viavacos{
  width: 25px;
  height: 25px;
  border-top: 25px solid chartreuse;
  border-left: 25px dashed rgb(0, 255, 255);
  border-right: 25px dotted greenyellow;
  border-bottom: 25px solid skyblue;
  border-radius: 50%;
  transition: all 1s linear 0.2s;
}
</style>