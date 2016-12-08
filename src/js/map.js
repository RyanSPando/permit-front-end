var map;
var layer_0;
var layer_1;
var layer_2;
var changeMap_0;
var autocomplete;

(function () {

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

  const url = 'https://permit-node-server.herokuapp.com/data/getPermits';

  var gradientCss = '(bottom';
  for (var i = 0; i < gradient.length; ++i) {
    gradientCss += ', ' + gradient[i];
  }
  gradientCss += ')';


  $('#legendGradient').css('background', '-webkit-linear-gradient' + gradientCss);
  $('#legendGradient').css('background', '-moz-linear-gradient' + gradientCss);
  $('#legendGradient').css('background', '-o-linear-gradient' + gradientCss);
  $('#legendGradient').css('background', 'linear-gradient' + gradientCss);
  var legend = document.getElementById('legend');
  function initialize() {
    map = new google.maps.Map(document.getElementById('map-canvas'), {
      center: new google.maps.LatLng(40.089629226126426, -105.30258178710938),
      zoom: 11
    });
    var style = [
      {
        featureType: 'all',
        elementType: 'all',
        stylers: [
          { saturation: 13 }
        ]
      }
    ];
    var styledMapType = new google.maps.StyledMapType(style, {
      map: map,
      name: 'Styled Map'
    });

    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
    map.mapTypes.set('map-style', styledMapType);
    map.setMapTypeId('map-style');

    const today = new Date();
    const currentDate = `${today.getFullYear()}-${(today.getMonth() + 1)}`;
    $.ajax(`${url}?AppliedDate=${currentDate}`)
    .then(pinData => {
      const heatLayerData = pinData.map(permit => new google.maps.LatLng(permit.lat, permit.lon));
      layer_0 = new google.maps.visualization.HeatmapLayer({
        data:heatLayerData,
        map: map,
        gradient: gradient,
        radius: 20,
        dissipating: true,
        maxIntensity: 10
      });

      layer_1 = new google.maps.KmlLayer({
          url: 'https://raw.githubusercontent.com/RyanSPando/permit-front-end/KML-attempt/src/data/Municipalities.kml',
          map: map,
          preserveViewport: true
      });

    //   layer_2 = new google.maps.KmlLayer({
    //       url: 'https://raw.githubusercontent.com/RyanSPando/permit-front-end/KML-attempt/src/data/allNeighborhoods.kml',
    //       map: map,
    //       preserveViewport: true
    //   });

    });

    //=======AutoComplete=======//

    var input = document.getElementById('auto-input');
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.setTypes( [ 'geocode' ] );
    autocomplete.bindTo('bounds', map);
  }
  //======Functions=====
  changeMap_0 = function() {
    var whereClause;
    var searchCity = $('#search-string_0').val().replace(/'/g, "\\'");
    if (searchCity !== '--Select--' || searchCity !== '') {
      whereClause = "'OriginalCity' = '" + searchCity + "'";
    }
    var  searchDate = $('#when').val();

    $.ajax(`${url}?AppliedDate=${searchDate}&OriginalCity=${searchCity}`)
    .then(newPoints=> {
      const heatLayerData = newPoints.map(permit => new google.maps.LatLng(permit.lat, permit.lon));
      layer_0.setData(heatLayerData);
    });
  };

  google.maps.event.addDomListener(window, 'load', initialize);
})();
