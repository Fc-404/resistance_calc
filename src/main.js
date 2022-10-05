import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// css
import './assets/css/animation.css'

// js
import tools from './assets/js/tool'

// register
app.config.globalProperties.tools = tools


app.mount('#app')
