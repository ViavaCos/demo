<template>
    <div class="lazy-tree">
        <h2>展示：</h2>
        <el-tree
        ref="lazyTree"
        :props="props"
        :load="loadNode"
        lazy
        node-key="id"
        :default-checked-keys="defaultCheckedKeys"
        show-checkbox>
        </el-tree>
    </div>
</template>

<script>
export default {
  data () {
    return {
      props: {
        label: 'name',
        children: 'zones',
        isLeaf: 'leaf'
      },
      // 默认选中的节点
      defaultCheckedKeys: []
    }
  },
  mounted () {
    this.getDetails()
  },
  methods: {
    // 动态获取叶子节点的方法
    loadNode (node, resolve) {
      if (node.level === 0) {
        return resolve([{ name: 'region', id: 1000 }])
      }
      if (node.level > 1) return resolve([])

      setTimeout(() => {
        const data = [
          {
            id: 1001,
            name: 'leaf',
            leaf: true
          },
          {
            id: 1002,
            name: 'zone',
            leaf: true
          }
        ]

        resolve(data)
      }, 500)
    },
    // 模拟的详情接口
    detail () {
      return new Promise((resolve, reject) => {
        const data = [{ id: 1001, name: 'leaf', parent: 1000 }]
        resolve(data)
      })
    },
    // 获取回显数据
    async getDetails () {
      const res = await this.detail()
      res.forEach(item => {
        this.defaultCheckedKeys.push(item.id) // 此处应有去重
        this.setHalfCheckedNodes(item.parent)
      })
    },
    // 设置半选状态
    setHalfCheckedNodes (key) {
      const node = this.$refs['lazyTree'].getNode(key)
      if (node) { // 此处应判断当前节点的checked属性是否为true，是则不必半选
        node.indeterminate = true
      }
    }
  }
}
</script>

<style>
.lazy-tree{
    padding: 20px;
    width: 500px;
    height: 500px;
    background-color: #70E2FA;
}
</style>
