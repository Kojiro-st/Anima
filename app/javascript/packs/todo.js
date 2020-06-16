import Vue from 'vue/dist/vue.esm.js';
import Vuetify from 'vuetify/lib'
import Header from './components/header.vue';
import Firstbody from './components/firstbody.vue';
import Firstfooter from './components/firstfooter.vue';
import '@fortawesome/fontawesome-free/css/all.css'

Vue.component("Firstbody",Firstbody);
Vue.component("Firstfooter",Firstfooter );
Vue.use(Vuetify)

var app = new Vue({
  el: '#app',
  components: {
  'navbar': Header,
  'navbar2': Firstbody,
  'navbar3': Firstfooter,
  }
});