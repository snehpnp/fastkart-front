 /**=====================
     Timer 4 js
==========================**/
 //  var second = 1000,
 //      minute = second * 60,
 //      hour = minute * 60,
 //      day = hour * 24;

 //  var countDown = new Date("Aug 21, 2023 00:00:00").getTime(),
 //      x = setInterval(function () {
 //          var now = new Date().getTime(),
 //              distance = countDown - now;

 //          (document.getElementById("days5").innerText = Math.floor(distance / day)),
 //          (document.getElementById("hours5").innerText = Math.floor(
 //              (distance % day) / hour
 //          )),
 //          (document.getElementById("minutes5").innerText = Math.floor(
 //              (distance % hour) / minute
 //          )),
 //          (document.getElementById("seconds5").innerText = Math.floor(
 //              (distance % minute) / second
 //          ));
 //      }, second);

 /***** CALCULATE THE TIME REMAINING *****/
 function getTimeRemaining(endtime) {
     var t = Date.parse(endtime) - Date.parse(new Date());

     /***** CONVERT THE TIME TO A USEABLE FORMAT *****/
     var seconds = Math.floor((t / 1000) % 60);
     var minutes = Math.floor((t / 1000 / 60) % 60);
     var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
     var days = Math.floor(t / (1000 * 60 * 60 * 24));

     /***** OUTPUT THE CLOCK DATA AS A REUSABLE OBJECT *****/
     return {
         'total': t,
         'days': days,
         'hours': hours,
         'minutes': minutes,
         'seconds': seconds
     };
 }

 /***** DISPLAY THE CLOCK AND STOP IT WHEN IT REACHES ZERO *****/
 function initializeClock(id, endtime) {
     var clock = document.getElementById(id);
     var daysSpan = clock.querySelector('.days');
     var hoursSpan = clock.querySelector('.hours');
     var minutesSpan = clock.querySelector('.minutes');
     var secondsSpan = clock.querySelector('.seconds');

     function updateClock() {
         var t = getTimeRemaining(endtime);

         daysSpan.innerHTML = t.days;
         hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
         minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
         secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

         if (t.total <= 0) {
             clearInterval(timeinterval);
         }
     }

     updateClock(); // run function once at first to avoid delay
     var timeinterval = setInterval(updateClock, 1000);
 }

 /***** SET A VALID END DATE *****/
 var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
 initializeClock('clockdiv-4', deadline);