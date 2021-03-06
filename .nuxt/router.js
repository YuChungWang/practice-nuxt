import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f49cd79e = () => interopDefault(import('../pages/season/index.vue' /* webpackChunkName: "pages/season/index" */))
const _6b349ea2 = () => interopDefault(import('../pages/vod/_seasonId/_matchId.vue' /* webpackChunkName: "pages/vod/_seasonId/_matchId" */))
const _515adbd7 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/season",
    component: _f49cd79e,
    name: "season"
  }, {
    path: "/vod/:seasonId?/:matchId?",
    component: _6b349ea2,
    name: "vod-seasonId-matchId"
  }, {
    path: "/",
    component: _515adbd7,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
