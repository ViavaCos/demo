import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import './styles/base.css' // 初始化样式

import { Button, Menu, MenuItem, MenuItemGroup, Submenu, Table, TableColumn, Tree, Form, FormItem, Input, Message } from 'element-ui'

// Vue.use(ElementUI)
Vue.component(Button.name, Button)
Vue.component(Menu.name, Menu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(MenuItemGroup.name, MenuItemGroup)
Vue.component(Submenu.name, Submenu)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Tree.name, Tree)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(Input.name, Input)

Vue.config.productionTip = false
Vue.prototype.$message = Message
Vue.prototype.$jump = (params) => {
  let obj = {}
  if (typeof params === 'string') {
    obj = {
      path: params
    }
  } else if (params !== null && typeof params === 'object') {
    obj = params
  }
  router.push(obj, onComplete => {},onAbort => {})
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
