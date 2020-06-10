// import Vue from 'vue/dist/vue.esm.js'
// import Header from './components/header.vue'

// var app = new Vue({
//   el: '#app',
//   components: {
//     'navbar': Header,
//   }
// });

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
  }
});

// var app = new Vue({
//   el: '#container',
//   components: {
//     'navbar': Firstbody,
//     }
// });

// var body = new Vue({
//   el: '#body',
//   components: {
//     'navbar': body,
//   }
// });

// var app = new Vue({
//   el: '#footer',
//   components: {
//     'navbar': Firstfooter,
//     }
// });

// var footer = new Vue({
//   el: '#app',
//   components: {
//     'navbar': firstfooter,
//   }
// });