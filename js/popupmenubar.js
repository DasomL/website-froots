$(document).ready(function() {
  $("#nav").click(function() {
    $(this).toggleClass("open");
    $("#popup-bg").fadeToggle();
    $("#popup-nav").toggleClass("open-popup");
  });

  $("#popup-bg").click(function() {
    $("#nav").toggleClass("open");
    $("#popup-bg").fadeToggle();
    $("#popup-nav").toggleClass("open-popup");
  });
});
