import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import './utils/rem'
import './assets/fonts/iconfont.css'; // 引入自定义图标样式文件
const app = createApp(App)
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
app.use(router)
app.use(ElementPlus)
app.mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}