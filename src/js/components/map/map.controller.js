(function() {

  'use strict';

  angular
    .module('myApp.components.map', [])
    .controller('mapController', mapController);

  mapController.$inject = ['$scope', 'NgMap'];

  function mapController($scope, NgMap) {

    $scope.permitData = [
        new google.maps.LatLng(39.701053,-104.966018),
        new google.maps.LatLng(39.756207,-104.956496),
        new google.maps.LatLng(39.7561512,-104.9561225),
        new google.maps.LatLng(39.687286,-104.953852),
        new google.maps.LatLng(39.777507,-104.7805609),
        new google.maps.LatLng(39.78249539999999,-104.7810316),
        new google.maps.LatLng(39.7834054,-104.7621366),
        new google.maps.LatLng(39.7887633,-104.7626083),
        new google.maps.LatLng(39.79025850000001,-104.7712737),
        new google.maps.LatLng(39.7887633,-104.7626083),
        new google.maps.LatLng(39.774272,-105.007928),
        new google.maps.LatLng(39.661139,-104.938792),
        new google.maps.LatLng(39.7661262,-104.886414),
        new google.maps.LatLng(39.7962712,-104.8868716),
        new google.maps.LatLng(39.7744569,-104.9378987),
        new google.maps.LatLng(39.78249539999999,-104.7810316),
        new google.maps.LatLng(39.78249539999999,-104.7810316),
        new google.maps.LatLng(39.78249539999999,-104.7810316),
        new google.maps.LatLng(39.7834054,-104.7621366),
        new google.maps.LatLng(39.7830139,-104.7761493),
        new google.maps.LatLng(39.7887633,-104.7626083),
        new google.maps.LatLng(39.7902618,-104.7712737),
        new google.maps.LatLng(39.79025850000001,-104.7712737),
        new google.maps.LatLng(39.7885585,-104.8949672),
        new google.maps.LatLng(39.7602856,-105.0289281)
    ];

    var heatmap, vm = this;

    NgMap.getMap().then(function(map) {
      vm.map = map;
      heatmap = vm.map.heatmapLayers.foo;
    });

    vm.toggleHeatmap= function(event) {
      heatmap.setMap(heatmap.getMap() ? null : vm.map);
    };

    vm.changeGradient = function() {
      var gradient = [
        'rgba(0, 255, 255, 0)',
        'rgba(0, 255, 255, 1)',
        'rgba(0, 191, 255, 1)',
        'rgba(0, 127, 255, 1)',
        'rgba(0, 63, 255, 1)',
        'rgba(0, 0, 255, 1)',
        'rgba(0, 0, 223, 1)',
        'rgba(0, 0, 191, 1)',
        'rgba(0, 0, 159, 1)',
        'rgba(0, 0, 127, 1)',
        'rgba(63, 0, 91, 1)',
        'rgba(127, 0, 63, 1)',
        'rgba(191, 0, 31, 1)',
        'rgba(255, 0, 0, 1)'
      ];
      heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
    };

    vm.changeRadius = function() {
      heatmap.set('radius', heatmap.get('radius') ? null : 20);
    };

    vm.changeOpacity = function() {
      heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
    };
  }
})();
