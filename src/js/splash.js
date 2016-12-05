$(document).ready(function() {
  $("#splash-btn").click(function () {
      $("html, body").animate({ scrollTop: $("#navbar").offset().top }, 500);
      return true;
  });
});
