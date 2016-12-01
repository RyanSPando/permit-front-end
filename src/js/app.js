// sample angular code

(function() {

  'use strict';
  $.material.init();

  angular
    .module('myApp', [
      'ngMap',
      'myApp.config',
      'myApp.components.main',
      'myApp.components.map'
    ]);
})();
