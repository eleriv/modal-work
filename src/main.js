import { createApp } from 'vue'
import App from './App.vue'
import Popup from './components/Popup.vue'
import ABPopupForm from './components/ABPopupForm.vue'

import './assets/main.css'

const app = createApp(App)

app.component('popup', Popup)
app.component('ab-popup-form', ABPopupForm)

app.mount('#app')