'use strict';

function showMobile () {
  var laReserveLogoMobile = document.getElementsByClassName('laReserveLogoMobile');
  var laReserveLogo = document.getElementsByClassName('laReserveLogo');
  var headerMobile = document.getElementsByClassName('headerMobile');
  var headerDesktop = document.getElementsByClassName('headerDesktop');
  var wrapper = document.getElementById('wrapper');
  var footer = document.getElementById('theFooter');
  var footerHeight = footer.clientHeight;
  var wrapperHeight = wrapper.offsetHeight;
  var windowClientHeight = window.clientHeight;
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

  var body = document.body;
  var html = document.documentElement;

  var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
  var comparisonHeight;



  if (windowWidth > 1080) {
    for (var i = 0; i < laReserveLogoMobile.length; i++) {
      laReserveLogoMobile[i].style.display = 'none';
    }
    for (var i = 0; i < laReserveLogo.length; i++) {
      laReserveLogo[i].style.display = 'inline';
    }
    for (var i = 0; i < laReserveLogoMobile.length; i++) {
      laReserveLogoMobile[i].style.display = 'none';
    }
  }

  if (windowWidth <= 1080) {
    for (var i = 0; i < laReserveLogoMobile.length; i++) {
      laReserveLogoMobile[i].style.display = 'inline';
    }
    for (var i = 0; i < laReserveLogo.length; i++) {
      laReserveLogo[i].style.display = 'none';
    }
    for (var i = 0; i < laReserveLogoMobile.length; i++) {
      laReserveLogoMobile[i].style.display = 'inline';
    }
  }

  if (windowWidth > 768) {
    for (var i = 0; i < headerMobile.length; i++) {
      headerMobile[i].style.display = 'none';
    }

    for (var i = 0; i < headerDesktop.length; i++) {
      headerDesktop[i].style.display = 'inline';
    }
  }

  if (windowWidth <= 768) {
    for (var i = 0; i < headerMobile.length; i++) {
      headerMobile[i].style.display = 'inline';
    }

    for (var i = 0; i < headerDesktop.length; i++) {
      headerDesktop[i].style.display = 'none';
    }
  }

  if (windowHeight <= height) {
    comparisonHeight = height;
  }
  if (windowHeight > height) {
    comparisonHeight = windowHeight;
  }
  console.log('hola mundo 2\n', 'wrapperHeight', wrapperHeight, '\n windowHeight', windowHeight, '\n windowClientHeight', windowClientHeight, '\n screen.height', screen.height, '\n document.documentElement.clientHeight', document.documentElement.clientHeight, '\nheight', height);
  if (windowHeight > wrapperHeight + 80) {
    // footer.style.position = 'fixed';
    // footer.style.bottom = 0;
    // wrapper.style.height = (wrapperHeight) + 'px';
    wrapper.style.height = (windowHeight - 80) + 'px';
  } else {
    footer.style.position = 'relative';
    footer.style.bottom = 'auto';
    
  }
  console.log(footer.style);
}

// window.setTimeout(showMobile(), 1);
// window.onload = function () {showMobile()};
// window.onresize = function () {showMobile()};

$(function () {
  showMobile();
});

$(window).load(function () {
  showMobile();
});

$(window).resize(function () {
  showMobile();
})