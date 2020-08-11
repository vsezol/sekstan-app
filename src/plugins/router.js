import Vue from 'vue'
import Router from 'vue-router'
import Menu from '../pages/Menu'
import Archive from '../pages/location/Archive'
import NewPoint from '../pages/location/NewPoint'

Vue.use(Router)
export default new Router({
  routes: [
    { path: '/location/archive', component: Archive },
    { path: '/location/new-point', component: NewPoint },
    { path: '/', component: Menu }
  ],
  mode: 'history'
})
