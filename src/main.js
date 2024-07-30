import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from "primevue/config";

createApp(App).use(PrimeVue, { unstyled: true }).mount('#app')
