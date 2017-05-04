
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import VueRouter from 'vue-router'
//tell vue to use the router
Vue.use(VueRouter)

import vmodal from 'vue-js-modal'

Vue.use(vmodal)

var SocialSharing = require('vue-social-sharing');

Vue.use(SocialSharing);
//vuex store
import store from './store'


var infiniteScroll =  require('vue-infinite-scroll');
Vue.use(infiniteScroll)


Vue.component('pulse-loader', require('vue-spinner/src/PulseLoader.vue'));

Vue.component('adimage', require('./components/adimage.vue'));

import app from './components/app'
import landing from './components/landing'
import blogpost from './components/blogpost'
import oaps from './components/oaps'
import singleoaps from './components/singleoaps'
import all_podcasts from './components/allpodcast'
import chartcurrated from './components/chartcurrated'
import forumcomponent from './components/forumcomponent'
import singleforum from './components/singleforum'
import blogcategory from './components/blogcategory'


const routes = [
	//route for the home route of the webpage
  
	{ path: '/', component: landing },
  {path:'/blogpost/:id/:title', component: blogpost, name: 'blogpost'},
  {path:'/single_oap/:id/:name', component: singleoaps, name: 'single_oap'},
  {path:'/all_oaps', component: oaps, name: 'all_oaps'},
  {path:'/all_podcasts/:week', component: all_podcasts, name: 'all_podcasts', props: true},
  {path:'/chartcurrated/:currentchartweek', component: chartcurrated, name: 'chartcurrated', props: true},
  {path:'/forums', component: forumcomponent, name: 'forumcomponent'},
  {path:'/forum/:id/:name', component: singleforum, name: 'forum', props: true},
  {path:'/blogcategory/:name/:id', component: blogcategory, name: 'blogcategory', props: true}
	
]



const router = new VueRouter({
  routes, // short for routes: routes
  store,
  mode: 'history'
})

// router.afterEach((to, from) => {
//   if (/\s/.test(window.location.href)) {
//     // It has any kind of whitespace
//     window.location.href=window.location.href.replace(/\s+/g, "-");
//   }
//   next();
// })


const coolfm = new Vue({
	//define the selector for the root component
  el: '#app',
  //pass the template to the root component
  template: '<app/>',
  //declare components that the root component can access
  components: {app},
  //pass in the router to the vue instance
  router
}).$mount('#app')//mount the router on the app



