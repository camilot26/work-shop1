import "@/assets/main.scss"

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Profile from "@/components/subcomponents/Profile.vue";
createApp(App).use(router).mount('#app')
