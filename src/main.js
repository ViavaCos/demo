import Vue from 'vue'
import App from './App.vue'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import router from './router'

import htmlToPdf from '@/utils/htmlToPdf'
import './style/base.css' // 初始化样式

import { Button, Menu, MenuItem, MenuItemGroup, Submenu, Table, TableColumn, Tree } from 'element-ui'

Vue.use(htmlToPdf)

// Vue.use(ElementUI)
Vue.component(Button.name, Button)
Vue.component(Menu.name, Menu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(MenuItemGroup.name, MenuItemGroup)
Vue.component(Submenu.name, Submenu)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Tree.name, Tree)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
