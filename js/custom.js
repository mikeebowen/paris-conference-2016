'use strict';

function showMobile () {
  var laReserveLogoMobile = document.getElementsByClassName('laReserveLogoMobile');
  var laReserveLogo = document.getElementsByClassName('laReserveLogo');
  var headerMobile = document.getElementsByClassName('headerMobile');
  var headerDesktop = document.getElementsByClassName('headerDesktop');
  var wrapper = document.getElementById('wrapper');
  var footer = document.getElementById('theFooter');
  var footerHeight = footer.clientHeight;
  var wrapperHeight = wrapper.clientHeight;
  var windowClientHeight = window.clientHeight;
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
  
  //reset css value for wrapper height
  console.log('wrapperHeight', wrapperHeight, '\n windowHeight', windowHeight, '\n windowClientHeight', windowClientHeight, '\n screen.height', screen.height, '\n document.documentElement.clientHeight', document.documentElement.clientHeight);
  if (windowHeight > wrapperHeight) {
    wrapper.style.height = (windowHeight - 90) + 'px';
  } 
  if (windowHeight <= wrapperHeight) {
    wrapper.style.height = '';
    
  };


  /*if (wrapperHeight + (footerHeight + 50) < windowHeight) {
    wrapper.style.height = (windowHeight - 110) + 'px';
    console.log('window is taller', wrapper.style.height);
  }
  if (wrapperHeight + (footerHeight + 50) > windowHeight) {
    wrapper.style.height = (wrapperHeight - 110) + 'px';
    console.log('wrapper is taller', wrapper.style.height);
  }
*/
}

showMobile();
window.onresize = function () {showMobile()};