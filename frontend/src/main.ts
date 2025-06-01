import 'bs-stepper/dist/css/bs-stepper.min.css'
import 'tiny-slider/dist/tiny-slider.css'
import 'glightbox/dist/css/glightbox.min.css'
import 'aos/dist/aos.css'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import 'bootstrap/scss/bootstrap.scss'
import '@/assets/scss/style.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createBootstrap } from 'bootstrap-vue-next'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { FcGoogle } from 'oh-vue-icons/icons'
import App from './App.vue'
import router from './router'
import Toast, { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

addIcons(FcGoogle)
const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.component('v-icon', OhVueIcon)
app.use(createBootstrap())
app.use(createPinia())
app.use(router)
app.use(Toast, {
  position: POSITION.TOP_RIGHT,
  timeout: 5000,
});
app.mount('#app')