$(document).ready(function() {
  $("#menu").click(function() {
    $(this).toggleClass("open");
    $("#popup-bg").fadeToggle();
    $("#popup-nav").toggleClass("open-popup");
  });
});
