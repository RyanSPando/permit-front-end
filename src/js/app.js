// sample angular code

(function() {

  'use strict';

  angular
    .module('myApp', [
      'ngMap',
      'myApp.config',
      'myApp.components.main',
      'myApp.components.map'
    ]);
})();
