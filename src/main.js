import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from "primevue/config";

import { MotionPlugin } from '@vueuse/motion';

const app = createApp(App);
app.use(PrimeVue, { unstyled: true }).mount('#app')
app.use(MotionPlugin);
