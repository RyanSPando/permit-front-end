$(document).ready(function() {
  const url = 'https://permit-node-server.herokuapp.com/data/radius';
  const url2 = 'https://permit-node-server.herokuapp.com/data/zillow';
  $("#splash-btn").click(function () {
    var input = $('#auto-input').val();
      $("html, body").animate({ scrollTop: $("#navbar").offset().top }, 500);
      if ( input !== '') {
        $.ajax(`https://maps.googleapis.com/maps/api/geocode/json?address=${input}`)
        .then(pinData => {
          const results = pinData.results[0];
          setTimeout(function () {
            var marker = new google.maps.Marker({
              position: results.geometry.location,
              map: map,
              title: results.formatted_address,
              animation: google.maps.Animation.DROP,
              icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
            });
            map.setCenter(marker.getPosition());
            map.setZoom(13);
            const location = results.geometry.location;
            $.ajax(`${url}?lat=${location.lat}&lon=${location.lng}`)
            .then(mapData => {
              const heatLayerData = mapData.rows.map(data => {
                return new google.maps.LatLng(data.lat, data.lon);
              });
              layer_0.setData(heatLayerData);
            });
          },10);
          $.ajax(`${url2}?address=${input}`)
          .then(zillow => {
            console.log(zillow);
          });
        });
      }
      return true;
  });
});
