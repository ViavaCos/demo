<template>
  <div class="upload">
    <h2>图片上传</h2>
    <input type="file" id="" @change="handleFileChange">
    <button @click="handleUpload">上传</button>
  </div>
</template>

<script>
import { upload } from '@/api'
export default {
  name: 'upload',
  data () {
    return {
        // 文件
        file: ''
    }
  },
  methods: {
    //  文件上传
    handleFileChange (e) {
        this.file = e.target.files[0]
    },
    // 上传接口
    handleUpload () {
      upload(this.file)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
