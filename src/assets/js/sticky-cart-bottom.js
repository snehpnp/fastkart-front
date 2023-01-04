/**=====================
     Sticky Cart Bottom js
==========================**/
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  var width_content = jQuery(window).width();

  if (width_content > "300") {
    if (scroll >= 800) {
      $("body").addClass("stickyCart");
    } else {
      $("body").removeClass("stickyCart");
    }
  }
});