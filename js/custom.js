'use strict';

function showMobile () {
  var contactUsFooterMobile = document.getElementsByClassName('contactUsFooterMobile');
  var contactUsFooter = document.getElementsByClassName('contactUsFooter');
  var laReserveLogo = document.getElementsByClassName('laReserveLogo');
  var laReserveLogoMobile = document.getElementsByClassName('laReserveLogoMobile');
  var headerMobile = document.getElementsByClassName('headerMobile');
  var headerDesktop = document.getElementsByClassName('headerDesktop');
  var theFooter = document.getElementById('theFooter');
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;

  if (windowWidth > 1080) {
    for (var i = 0; i < contactUsFooterMobile.length; i++) {
      contactUsFooterMobile[i].style.display = 'none';
    }
    for (var i = 0; i < contactUsFooter.length; i++) {
      contactUsFooter[i].style.display = 'inline';
    }
    for (var i = 0; i < laReserveLogo.length; i++) {
      laReserveLogo[i].style.display = 'inline';
    }
    for (var i = 0; i < laReserveLogoMobile.length; i++) {
      laReserveLogoMobile[i].style.display = 'none';
    }
  }

  if (windowWidth <= 1080) {
    for (var i = 0; i < contactUsFooter.length; i++) {
      contactUsFooter[i].style.display = 'none';
    }
    for (var i = 0; i < contactUsFooterMobile.length; i++) {
      contactUsFooterMobile[i].style.display = 'inline';
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

  if (windowHeight > 520) {
    theFooter.style.position = 'fixed';
  }

  if (windowHeight <= 520) {
    theFooter.style.position = 'relative';
  };

}

showMobile();
window.onresize = function () {showMobile()};