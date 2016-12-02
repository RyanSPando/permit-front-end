(function() {

  'use strict';

  angular
    .module('myApp.components.map', [])
    .controller('mapController', mapController);

  mapController.$inject = ['$scope', 'uiGmapGoogleMapApi', 'uiGmapIsReady'];

  function mapController($scope, uiGmapGoogleMapApi, uiGmapIsReady) {
    const vm = this;

    vm.city = '';
    vm.cityArr = [
    'ALLENSPARK',
    'BERTHOUD',
    'BOULDER',
    'BROOMFIELD',
    'ELDORADO SPRINGS',
    'ERIE',
    'GOLD HILL',
    'GOLDEN',
    'HYGIENE',
    'JAMESTOWN',
    'LAFAYETTE',
    'LONGMONT',
    'LOUISVILLE',
    'LYONS',
    'MOUNTAINS',
    'NEDERLAND',
    'NIWOT',
    'PINECLIFFE',
    'RAYMOND',
    'SUPERIOR',
    'UNINCORPORATED',
    'WARD'
    ];

    const origCenter = { latitude: 40.0072998696373, longitude: -105.13449896240235 };

    vm.map = {
      center: origCenter, zoom: 10,
      refresh: function () {
          vm.map.control.refresh(origCenter);
        }
    };

    // vm.map.options = {
    //   mapTypeId: 'HYBRID'
    // };

    vm.map.control = {};
    vm.map.fusionlayer = {};

    vm.map.fusionlayer.options = {
        // https://developers.google.com/maps/documentation/javascript/reference#FusionTablesLayerOptions
        clickable: true,
        query: {
            select: "col58",
            from: "1mL-eAHwaUdf_rJ6KQm0NSQF8BcS900n8PGEc-xwg",
            where: vm.city
        },
        suppressInfoWindows: false
    };

    vm.changeCityMap = function() {
      $scope.$apply();
      vm.map.control.refresh(origCenter);
    };

    vm.toggleHeatmap = function(event) {
      vm.map.setMap(vm.map.control.getMap() ? null : vm.map);
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
      vm.map.set('gradient', vm.map.get('gradient') ? null : gradient);
    };

    vm.changeRadius = function() {
      vm.map.set('radius', vm.map.get('radius') ? null : 20);
    };

    vm.changeOpacity = function() {
      vm.map.set('opacity', vm.map.get('opacity') ? null : 0.2);
    };
  }
})();
