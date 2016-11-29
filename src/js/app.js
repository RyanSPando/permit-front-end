// sample angular code

(function() {

  'use strict';

  angular
    .module('myApp', [
      'heatmap',
      'myApp.config',
      'myApp.components.main',
      'myApp.components.map'
    ]);

})();
