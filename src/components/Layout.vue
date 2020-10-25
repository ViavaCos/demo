<template>
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
        <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
        </template>
            <el-menu-item index="1-1" @click="$router.push('/animate')">animate</el-menu-item>
            <el-menu-item index="1-2" @click="$router.push('/throttle')">此行缩进对齐+防抖节流</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
            <el-menu-item index="1-4">选项4</el-menu-item>
        </el-submenu>
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
</template>

<script>
import picker from '@/components/area-picker/picker'

export default {
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClickArea () {
      picker.show()
    }
  }
}
</script>

<style lang="less" scoped>
@import './area-picker/picker.css';
</style>