
$(document).ready(function(){
  openmobileNavbar()
  closemobileNavbar()
});

// $(function() {
//   var $body = $('body');
//   $body.on('click', function(event) {
//     var clickedOutside = $(event.target).closest('.menu-toggle').length == 0;
//     if (clickedOutside && $body.hasClass('menu-open')) {
//       $body.removeClass('menu-open');
//     }
// });
// }


$(function() {
  window.addEventListener(
    'resize', 
    function() {
      var width = $(window).width();
      $("resize-icon").css({
          "height": width * 0.05
      });
    });

})



$(function() {
  window.addEventListener(
    'scroll',
    function() {
      var navbar = document.getElementById("top-page");
      var sticky = navbar.offsetTop;

      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }

    });
});

function openmobileNavbar() {
  var mobileNav = document.getElementById("mobile-links");
  var openIcon = document.getElementById("mobile-menu");
  var closeIcon = document.getElementById("mobile-menu-close");

  mobileNav.style.display = "block";
  closeIcon.style.display = "block";
  openIcon.style.display = "none";
}

function closemobileNavbar() {
  var mobileNav = document.getElementById("mobile-links");
  var openIcon = document.getElementById("mobile-menu");
  var closeIcon = document.getElementById("mobile-menu-close");

  mobileNav.style.display = "none";
  closeIcon.style.display = "none";
  openIcon.style.display = "block";
}
