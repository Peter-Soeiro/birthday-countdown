let countDownDate = new Date("Sep 15, 2022 00:00:00");

// Uploads every second (1000 miliseconds)
let myInterval = setInterval(function () {
   let countDownTime = countDownDate.getTime();
   let today = new Date().getTime();
   let timeLeft = countDownTime - today;

   if (timeLeft <= 0) {
      countDownDate.setFullYear(countDownDate.getFullYear() + 1);
      countDownTime = countDownDate.getTime();
      timeLeft = countDownTime - today;
   }

   const days = timeLeft / 1000 / 60 / 60 / 24;
   const hours = (days - Math.floor(days)) * 24;
   const minutes = (hours - Math.floor(hours)) * 60;

   document.querySelector(".days").innerHTML = Math.floor(days);
   document.querySelector(".hours").innerHTML = Math.floor(hours);
   document.querySelector(".minutes").innerHTML = Math.floor(minutes);
}, 1000);
