'use strict';

function showMobile () {
  var mobileSubmitDiv = document.getElementsByClassName('mobileSubmit');
  var desktopSubmitDiv = document.getElementsByClassName('desktopSubmit');
  var windowWidth = window.innerWidth;

  if (windowWidth > 975) {
    for (var i = 0; i < mobileSubmitDiv.length; i++) {
      mobileSubmitDiv[i].style.display = 'none';
    }
    for (var i = 0; i < desktopSubmitDiv.length; i++) {
      desktopSubmitDiv[i].style.display = 'inline';
    }
  }

  if (windowWidth <= 975) {
    for (var i = 0; i < desktopSubmitDiv.length; i++) {
      desktopSubmitDiv[i].style.display = 'none';
    }
    for (var i = 0; i < mobileSubmitDiv.length; i++) {
      mobileSubmitDiv[i].style.display = 'inline';
    }
  }
}

showMobile();
window.onresize = function () {showMobile()};
