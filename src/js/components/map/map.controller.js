(function() {

  'use strict';

  angular
    .module('myApp.components.map', [])
    .controller('mapController', mapController);

  mapController.$inject = ['$scope', '$heatmap'];

  function mapController($scope, $heatmap) {

    $scope.heatmapData = generateRandomData(1000);
    // the config attribute will configure the heatmap directive instance
    $scope.heatmapConfig = {
     blur: 0.9,
     opacity:0.5
   };
 }

 function generateRandomData(len) {
   var max = 100;
   var min = 1;
   var maxX = document.body.clientWidth;
   var maxY = document.body.clientHeight;
   var data = [];
   while (len--) {
     data.push({
       x: ((Math.random() * maxX) >> 0),
       y: ((Math.random() * maxY) >> 0),
       value: ((Math.random() * max + min) >> 0),
       radius: ((Math.random() * 50 + min) >> 0)
     });
   }
   return {
     max: max,
     min: min,
     data: data
   };
 }
})();
