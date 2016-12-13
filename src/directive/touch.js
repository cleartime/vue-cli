/**
 * Created by gxx on 16/12/12.
 */
;(function () {

  var vueTouch = {}

  vueTouch.install = function (Vue) {

    Vue.directive('touch', {
      bind: function (el, binding, vnode, oldVnode) {
        el.addEventListener('touchstart', function (e) {
          //console.log(e)
        })
      },

      update: function () {
      },

      unbind: function () {
      }
    })
  }

  if (typeof exports == "object") {
    module.exports = vueTouch
  } else if (typeof define == "function" && define.amd) {
    define([], function(){ return vueTouch })
  } else if (window.Vue) {
    window.VueTouch = vueTouch
    Vue.use(vueTouch)
  }

})()
