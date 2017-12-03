window.onload = function () {
  'use strict';
  function colorClock() {
    'use strict';
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    
    if (hour < 10) {
      hour = '0' + hour;
    }
    
    if (min < 10) {
      min = '0' + min;
    }
    
    if (sec < 10) {
      sec = '0' + sec;
    }
    
    var clockFace = hour + ':' + min + ':' + sec;
    var hexa = '#' + hour + min + sec;
    
    document.getElementById('clock').innerHTML = clockFace;
    document.body.style.backgroundColor = hexa;
    
    setTimeout(function() {
      colorClock();
    }, 1000);
  };
  
  colorClock();
};
