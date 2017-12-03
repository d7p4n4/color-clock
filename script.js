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
    
    var clockFace = hour + 'h ' + min + 'm ' + sec + 's';
    var hexa = '#' + hour + min + sec;
    
      if (sec == 10) {
      hexa = '#' + hour+ min + 'ff';
    } else if (sec == 20) {
      hexa = '#' + 'aa' + min + sec;
    } else if (sec == 30) {
      hexa = '#' + hour + 'bb' + sec;
    }
    
    document.getElementById('clock').innerHTML = clockFace;
    document.body.style.backgroundColor = hexa;
    
    setTimeout(function() {
      colorClock();
    }, 1000);
  };
  
  colorClock();
};
