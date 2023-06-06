import { createApp } from 'vue'
import App from './App.vue'
import "./index.css"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons'

library.add(faMoon, faSun);


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')