var map;
var layer_0;
(function () {
  function initialize() {
    map = new google.maps.Map(document.getElementById('map-canvas'), {
      center: new google.maps.LatLng(40.089629226126426, -105.30258178710938),
      zoom: 10
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
    map.mapTypes.set('map-style', styledMapType);
    map.setMapTypeId('map-style');
    layer_0 = new google.maps.FusionTablesLayer({
      query: {
        select: "'LAT'",
        from: "1mL-eAHwaUdf_rJ6KQm0NSQF8BcS900n8PGEc-xwg"
      },
      map: map,
      heatmap: {enabled: true}
    });
  }

  function changeMap_0() {
    var whereClause;
    var searchString = document.getElementById('search-string_0').value.replace(/'/g, "\\'");
    if (searchString != '--Select--') {
      whereClause = "'OriginalCity' = '" + searchString + "'";
    }
    layer_0.setOptions({
      query: {
        select: "'LAT'",
        from: "1mL-eAHwaUdf_rJ6KQm0NSQF8BcS900n8PGEc-xwg",
        where: whereClause
      },
      heatmap: {enabled: true}
    });
  }
  google.maps.event.addDomListener(window, 'load', initialize);
})();
