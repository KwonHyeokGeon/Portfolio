import { createApp } from 'vue'
import App from './App.vue'
import "./index.css"
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faMoon, faSun, faGlobe, faPencil, faTimes, faUser, faFolder, faCode, faBars, faFolderOpen} from '@fortawesome/free-solid-svg-icons'

library.add(faMoon, faSun, faGlobe, faPencil, faTimes, faUser, faFolder, faCode, faBars, faFolderOpen);


createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')