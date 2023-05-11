import './assets/main.css'

import { createApp } from 'vue'
/* pina */
import { createPinia } from 'pinia'
/* pina */

/* element ui */

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
/* element ui */

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
