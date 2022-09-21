import { createApp } from 'vue'
import App from './App.vue'

import { router } from './router'

// styles
import '@/styles/reset.css'
import 'virtual:windi.css'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
