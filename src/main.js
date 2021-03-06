import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { faArchive } from '@fortawesome/free-solid-svg-icons'
import { faPenSquare } from '@fortawesome/free-solid-svg-icons'
import { faFileContract } from '@fortawesome/free-solid-svg-icons'
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
import { faSync } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faTh } from '@fortawesome/free-solid-svg-icons'
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faClipboard } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import HighchartsVue from 'highcharts-vue'
import Msg from 'vue-message'
import '@/assets/custom.scss'
import Gravatar from 'vue-gravatar';
 
Vue.component('v-gravatar', Gravatar);
Vue.use(BootstrapVue)
Vue.use(HighchartsVue)
Vue.use(require('vue-moment'))
Vue.use(Msg)
window.axios = require('axios')
library.add(faCoffee)
library.add(faWallet)
library.add(faUpload)
library.add(faArchive)
library.add(faFileContract)
library.add(faPenSquare)
library.add(faTachometerAlt)
library.add(faSync)
library.add(faCalendar)
library.add(faClock)
library.add(faList)
library.add(faTh)
library.add(faShieldAlt)
library.add(faSignOutAlt)
library.add(faClipboard)
library.add(faLock)
library.add(faSearch)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
