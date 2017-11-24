import Vue from 'vue'
import App from './App.vue'

/** Require in the leaflet module from the folder node_modules done automagically */
window.L = require('leaflet');

/** Start the vue app and bind it to the app element */
new Vue({
  el: '#app',
  render: h => h(App)
})
