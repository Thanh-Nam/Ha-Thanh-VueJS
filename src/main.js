
import { createApp } from 'vue'
import App from './App.vue'
import store from './store';
import router from './router'
import './assets/css/main.css'
import './assets/css/base.css'
import './assets/css/style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueSmoothScroll from 'vue3-smooth-scroll'
library.add(fab, fas, far)
const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(store)
app.use(router)
app.use(VueSmoothScroll)
app.mount('#app')
