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
  }
});

var app = new Vue({
  el: '#container',
});

var app = new Vue({
  el: '#footer',
});

// var body = new Vue({
//   el: '#body',
//   components: {
//     'navbar': body,
//   }
// });

// var footer = new Vue({
//   el: '#app',
//   components: {
//     'navbar': firstfooter,
//   }
// });