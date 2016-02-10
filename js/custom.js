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

  var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );



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
  
  console.log('hola mundo 2\n', 'wrapperHeight', wrapperHeight, '\n windowHeight', windowHeight, '\n windowClientHeight', windowClientHeight, '\n screen.height', screen.height, '\n document.documentElement.clientHeight', document.documentElement.clientHeight, '\nfooterHeight', footerHeight, 'height', height);
  wrapper.style.height = '';
  //if the window is taller set the wrapper height to the window height
  if (height > wrapperHeight + 100) {
    var diff = height - windowHeight + 60;
    wrapper.style.height = (height - diff) + 'px';
    // footer.style.position = 'fixed';
    // footer.style.bottom = 0;
  } 
  // if the wrapper is taller reset the wrapper height value
  if (height <= wrapperHeight + 100) {
    wrapper.style.height = '100%';
    // footer.style.position = 'relative';
    // footer.style.bottom = 'auto';
    
  }
  var sum = 0;
  for (var i = 0; i < document.getElementsByTagName('div').length; i++) {
    sum += document.getElementsByTagName('div')[i].clientHeight
    console.log(document.getElementsByTagName('div')[i].clientHeight, '\n', sum);
  };
}

window.onload = function () {showMobile()};
window.onresize = function () {showMobile()};