import { createApp } from 'vue'
import './style.css'
import '@material-design-icons/font';
import '@mdi/font/css/materialdesignicons.css'
import router from './routes/router.js'
import App from './App.vue'
import {createPinia} from 'pinia'
const pinia=createPinia()
createApp(App).use(pinia).use(router).mount('#app')
