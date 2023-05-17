import './assets/main.css'
/* mian css  */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
/* pina */
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
/* element ui */

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
