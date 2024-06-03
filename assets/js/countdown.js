(function($) {
"use strict";
/* Countdown Clock START*/

var daysSpan = document.getElementById('days');
var hoursSpan = document.getElementById('hours');
var minutesSpan = document.getElementById('minutes');
var secondsSpan = document.getElementById('seconds');

var initialDays = 29;
var initialHours = 7;
var initialMinutes = 29;
var initialSeconds = 39;

daysSpan.innerText = addLeadingZeros(initialDays);
hoursSpan.innerText = addLeadingZeros(initialHours);
minutesSpan.innerText = addLeadingZeros(initialMinutes);
secondsSpan.innerText = addLeadingZeros(initialSeconds);


var deadline = addRemainingTime(new Date(), initialDays, initialHours, initialMinutes, initialSeconds).getTime();

updateClock(deadline);
var interval = setInterval(updateClock, 1000);

function addRemainingTime(startDate, days, hours, minutes, seconds) {
  return new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate() + days,
    startDate.getHours() + hours,
    startDate.getMinutes() + minutes,
    startDate.getSeconds() + seconds
  );
}

function getRemainingTime(deadline) {
  var total = deadline - new Date().getTime();
  
  if (isNaN(total)) {
    return false;
  }
  
  var seconds = Math.floor((total / 1000) % 60);
  var minutes = Math.floor((total / 1000 / 60) % 60);
  var hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  var days = Math.floor(total / (1000 * 60 * 60 * 24));
  
  return {
    'total': total,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function updateClock() {
  var remainingTime = getRemainingTime(deadline);
  
  if (remainingTime.total <= 0) {
    clearInterval(interval);
    
    document.getElementById('expired').classList.add('show');
    
    return false;
  } else if (!remainingTime) {
    return false;
  }
  
  daysSpan.innerText = addLeadingZeros(remainingTime.days);
  hoursSpan.innerText = addLeadingZeros(remainingTime.hours);
  minutesSpan.innerText = addLeadingZeros(remainingTime.minutes);
  secondsSpan.innerText = addLeadingZeros(remainingTime.seconds);
}

function addLeadingZeros(time) {
  return ('0' + time).slice(-2);
}

/* Countdown Clock end*/


})(jQuery);
