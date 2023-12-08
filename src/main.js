import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index.js"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
// 全局注册el-icon
for (const [name, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(name, component);
}
app.use(router)
app.use(ElementPlus)
app.mount('#app')
