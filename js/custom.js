'use strict';

function showMobile () {
  var laReserveLogoMobile = document.getElementsByClassName('laReserveLogoMobile');
  var laReserveLogo = document.getElementsByClassName('laReserveLogo');
  var headerMobile = document.getElementsByClassName('headerMobile');
  var headerDesktop = document.getElementsByClassName('headerDesktop');
  var theFooter = document.getElementById('theFooter');
  var videoContainerWrapper = document.getElementById('videoContainerWrapper');
  var leftSpacer = document.getElementById('leftSpacer');
  var rightSpacer = document.getElementById('rightSpacer');
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;

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

/*  if (windowWidth < 768) {
    videoContainerWrapper.style.width = '90%';
    leftSpacer.style.width = '1%';
    rightSpacer.style.width = '9%';
  }

  if (windowWidth >= 768 && windowWidth <= 1050) {
    videoContainerWrapper.style.width = '60%';
    leftSpacer.style.width = '20%';
    rightSpacer.style.width = '20%';
  }

  if (windowWidth >= 1050 && windowWidth <= 1400) {
    videoContainerWrapper.style.width = '41.6666666667%';
    leftSpacer.style.width = '29.1666666667%';
    rightSpacer.style.width = '29.1666666667%';
  }

  if (windowWidth > 1400) {
    leftSpacer.style.width = '28.1667%';
  }*/

}

showMobile();
window.onresize = function () {showMobile()};