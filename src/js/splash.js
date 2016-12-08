
$(document).ready(function() {
  google.charts.load('current', {packages: ['corechart', 'bar']});
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

              var data = new google.visualization.DataTable();

              var permitData = [
                ['January',  0],
                ['February',  0],
                ['March',  0],
                ['April',  0],
                ['May',  0],
                ['June',  0],
                ['July',   0],
                ['August',  0],
                ['September',  0],
                ['October', 0],
                ['November',  0],
                ['December',  0]
              ];

              mapData.rows.forEach(permit => {
                let index = parseInt(permit.AppliedDate.slice(5, 7));
                permitData[index - 1][1] += parseInt(permit.EstProjectCost);
              });

              data.addColumn('string', 'Month');
              data.addColumn('number', 'Total Permit Value');
              data.addRows(permitData);

              var options = {
                  title: 'Total permit value by Month',
                  annotations: {
                    alwaysOutside: false,
                    textStyle: {
                      fontSize: 10,
                      color: '#000',
                      auraColor: 'none'
                    }
                  },
                  hAxis: {
                    title: 'Month',
                    textPosition: 'none'
                  },
                  vAxis: {
                    title: 'Total Permi Value USD'
                  },
                  legend: {
                    position: 'none'
                  }
                };

              var chart = new google.visualization.ColumnChart(document.getElementById('chart'));
              chart.draw(data, options);
            });
          });
        },1000);
      }
      return true;
  });
});
