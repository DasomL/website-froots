$(window).scroll(function() {
  if ($(this).scrollTop() > 200) {
    $(".menu-icon").fadeIn();
  } else {
    $(".menu-icon").fadeOut();
  }
});

$(".menu-icon").click(function() {
  location.replace("pf-main.html");
});
