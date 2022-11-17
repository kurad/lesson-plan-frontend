import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue3 } from 'bootstrap-vue-3'
import { CKEditor } from '@ckeditor/ckeditor5-vue';

import 'admin-lte/dist/css/adminlte.min.css'
import 'admin-lte/plugins/fontawesome-free/css/all.min.css'
import 'admin-lte/plugins/jquery/jquery.min.js'
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js'
import 'admin-lte/dist/js/adminlte.min.js'
import './components/axios'


const app = createApp(App);
app.use(store)
app.use(BootstrapVue3)
app.use(router)
app.use(CKEditor)
app.mount('#app')
