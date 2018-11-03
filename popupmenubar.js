$(document).ready(function() {
  $("#menu").click(function() {
    $(this).toggleClass("open");
    $("#popup-bg").fadeToggle();
    $("#popup-nav").toggleClass("open-popup");
  });

  // $("#cta-btn").click(function() {
  //   $(".call-to-action-popup").fadeIn();
  // });
  // $("#close").click(function() {
  //   $(".call-to-action-popup").fadeOut();
  // });
});
