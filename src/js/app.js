// sample angular code

(function() {

  'use strict';
  $.material.init();

  angular
    .module('myApp', [
      'myApp.config',
      'myApp.components.main'
    ]);
})();
