// sample angular code

(function() {

  'use strict';
  $.material.init();

  angular
    .module('myApp', [
      'uiGmapgoogle-maps',
      'myApp.config',
      'myApp.components.main',
      'myApp.components.map'
    ]);
})();
