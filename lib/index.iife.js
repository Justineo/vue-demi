(function(window) {
  var VueDemi = {};
  var Vue = window.Vue;
  if (Vue) {
    if (Vue.version.slice(0, 2) === '2.') {
      var VueCompositionAPI = window.VueCompositionAPI;
      if (VueCompositionAPI) {
        for (var key in VueCompositionAPI) {
          VueDemi[key] = VueCompositionAPI[key];
        }
        VueDemi.isVue2 = true;
        VueDemi.isVue3 = false;
        VueDemi.Vue = Vue;
        VueDemi.version = Vue.version
      } else {
        console.error('[vue-demi] no VueCompositionAPI instance found, please be sure to import vue-demi after VueCompositionAPI.')
      }
    } else if (Vue.version.slice(0, 2) === '3.') {
      for (var key in Vue) {
        VueDemi[key] = Vue[key];
      }
      VueDemi.isVue2 = false;
      VueDemi.isVue3 = true;
      VueDemi.Vue = Vue;
      VueDemi.version = Vue.version;
    } else {
      console.error('[vue-demi] Vue version ' + Vue.version + ' unsupported.')
    }
  } else {
    console.error('[vue-demi] no Vue instance found, please be sure to import vue-demi after Vue.')
  }
  window.VueDemi = VueDemi;
})(window);