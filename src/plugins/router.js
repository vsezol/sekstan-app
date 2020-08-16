import Vue from 'vue'
import Router from 'vue-router'
import Menu from '../pages/Menu'
import location from './routes/location'
import MeasureAngle from '../pages/MeasureAngle'

Vue.use(Router)
export default new Router({
  routes: [
    ...location,
    { path: '/measure-angle', component: MeasureAngle },
    { path: '/', component: Menu }
  ],
  mode: 'history'
})
