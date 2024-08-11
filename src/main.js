import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from "primevue/config";

import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App);
app.use(PrimeVue, { unstyled: true }).mount('#app');
app.AOS = new AOS.init({ disable: "phone" });
