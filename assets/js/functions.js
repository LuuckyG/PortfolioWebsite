
$(document).ready(function(){

});

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
