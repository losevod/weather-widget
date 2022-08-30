import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { faArrowTurnDown } from '@fortawesome/free-solid-svg-icons'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faCloudSun } from '@fortawesome/free-solid-svg-icons'
import { faCloudRain } from '@fortawesome/free-solid-svg-icons'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { faCloudscale } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUserSecret)
library.add(faGear)
library.add(faBars)
library.add(faTrashCan)
library.add(faArrowTurnDown)
library.add(faCloud)
library.add(faSun)
library.add(faCloudSun)
library.add(faCloudRain)
library.add(faLocationArrow)
library.add(faCloudscale)

const app = createApp(App)

app.use(createPinia())
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
