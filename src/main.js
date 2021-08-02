import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faMapSigns } from '@fortawesome/free-solid-svg-icons'
import { faHotel } from '@fortawesome/free-solid-svg-icons'
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { faTh } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)
library.add(faMapSigns)
library.add(faHotel)
library.add(faLayerGroup)
library.add(faBookOpen)
library.add(faLink)
library.add(faCodeBranch)
library.add(faTh)
library.add(faList)
library.add(faStar)
library.add(faStarHalfAlt)
library.add(faStarRegular)
library.add(faChevronLeft)
library.add(faChevronRight)
library.add(faAngleDoubleRight)
library.add(faAngleDoubleLeft)

const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
