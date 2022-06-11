let countDownDate = new Date("Sep 15, 2022 00:00:00");

// Uploads every 0.1 seconds (100 milliseconds)
let myInterval = setInterval(function () {
   let today = new Date();

   if ((today.getDate() == 15) & (today.getMonth() == 8)) {
      document.querySelector(".message").classList.remove("hidden");
   } else {
      document.querySelector(".message").classList.add("hidden");
   }

   let timeLeft = countDownDate.getTime() - today.getTime();

   if (timeLeft <= 0) {
      countDownDate.setFullYear(countDownDate.getFullYear() + 1);
      timeLeft = countDownDate.getTime() - today.getTime();
   }

   const days = timeLeft / 1000 / 60 / 60 / 24;
   const hours = (days - Math.floor(days)) * 24;
   const minutes = (hours - Math.floor(hours)) * 60;

   document.querySelector(".days").innerHTML = Math.floor(days);
   document.querySelector(".hours").innerHTML = Math.floor(hours);
   document.querySelector(".minutes").innerHTML = Math.floor(minutes);
}, 100); // 100 milliseconds
