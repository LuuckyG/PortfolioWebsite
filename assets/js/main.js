// Sticky navbar
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


// Mobile Navigation menu
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


$(function autocloseMobileNavbar() {
  var $body = $('body');
  $body.on('click', function(event) {
    const displayStyle = document.getElementById('mobile-links').style.display;
    var clickedOutside = $(event.target).closest('.navbar-mobile').length == 0;

    if (clickedOutside && (displayStyle == 'block')) {
      closemobileNavbar();
    };
});
});


// Scrolling
$(function () {
	$('a.page-scroll').bind('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }
	});
});


// Client slideshow
var clientIndex = 1;
var clientInterval = 4000;

window.addEventListener('load', function() {
  clientSlideshow(clientIndex)
  myTimer = setInterval(() => {
    plusClients(1)
  }, clientInterval);
})


function plusClients(n) {
  clearInterval(myTimer);
  if (n < 0) {
    clientSlideshow(clientIndex -= 1);
  } else {
    clientSlideshow(clientIndex += 1);
  }

  if (n === -1) {
    myTimer = setInterval(function() {plusClients(n + 2)}, clientInterval);
  } else {
    myTimer = setInterval(function() {plusClients(n + 1)}, clientInterval);
  }
}


function currentClient(n) {
  clearInterval(myTimer)
  myTimer = setInterval(function() {plusClients(n + 1)}, clientInterval);
  clientSlideshow(clientIndex = n);
}


// Client automatic slideshow functionality
function clientSlideshow(n) {
  var i;
  var clients = document.getElementsByClassName("client-card");
  var logos = document.getElementsByClassName("client-logo");
  var dots = document.getElementsByClassName("client-btn");
  
  // Animations
  for (i = 0; i < clients.length; i++) {
    clients[i].style.display = "none";
    $(clients[i]).removeClass('animate-right');
    $(logos[i]).removeClass('active');
    $(dots[i]).removeClass('active');
  }

  // Display of client
  if (n > clients.length) {clientIndex = 1}
  if (n < 1) {clientIndex = clients.length}

  if (window.outerWidth > 660) {
    clients[clientIndex - 1].style.display = "grid";

    $(clients[clientIndex - 1]).addClass('animate-right');
    $(logos[clientIndex - 1]).addClass('active');
    $(dots[clientIndex - 1]).addClass('active');
  } else {
    clients[clientIndex - 1].style.display = "flex"; 
    clients[clientIndex - 1].style.flexWrap = "wrap";
    clients[clientIndex - 1].style.flexDirection = "column";

    $(clients[clientIndex - 1]).addClass('animate-right');
    $(dots[clientIndex - 1]).addClass('active');
  }
  
}


// Pause-resume slideshow functionality
pause = () => {  clearInterval(myTimer); }

resume = () => {
  clearInterval(myTimer);
  myTimer = setInterval(function() {plusClients(clientIndex)}, clientInterval);
}

var slideshowContainer = document.getElementsByClassName('slideshow-container')[0];
slideshowContainer.addEventListener('mouseenter', pause);
slideshowContainer.addEventListener('mouseleave', resume);

