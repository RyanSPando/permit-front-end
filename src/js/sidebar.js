(function () {
  $('#Heatmap').click(function(event) {
    layer_0.setMap(layer_0.getMap() ? null : map);
  });

  $('#Gradient').click(function(event) {
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
    layer_0.set('gradient', layer_0.get('gradient') ? null : gradient);
  });

  $('#Radius').click(function(event) {
    layer_0.set('radius', layer_0.get('radius') ? null : 20);
  });

  $('#Opacity').click(function(event) {
    layer_0.set('opacity', layer_0.get('opacity') ? null : 0.2);
  });

})();
