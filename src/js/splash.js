$(document).ready(function() {
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
          }, 1000);
        });
      }
      return true;
  });
});
