import Vue from 'vue/dist/vue.esm.js';
import Header from './components/header.vue';
import Firstbody from './components/firstbody.vue';
import Firstfooter from './components/firstfooter.vue';

Vue.component("Firstbody",Firstbody);
Vue.component("Firstfooter",Firstfooter );

var app = new Vue({
  el: '#app',
  components: {
  'navbar': Header,
  'navbar2': Firstbody,
  'navbar3': Firstfooter,
  }
});