import { createApp } from 'vue'
import './style.css'
import '@material-design-icons/font';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from './routes/router.js'
import App from './App.vue'
import {createPinia} from 'pinia'
const pinia=createPinia()
pinia.use((context)=>{
    const storeId=context.store.$id
    console.log(storeId);
context.store.$subscribe((mutations,state)=>{
    localStorage.setItem(storeId , JSON.stringify(state))
})
})
createApp(App).use(pinia).use(router).mount('#app')
