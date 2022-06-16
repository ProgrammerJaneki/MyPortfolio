// const nav1 = document.querySelector(".nav1");
// const navDetails1 = document.querySelector(".nav-details");
// Nagivation Opacity Transition
nav1.addEventListener("mouseover", function() {
   navDetails1.style.opacity = 0;
   var intervalid = setInterval(function() {
      if (navDetails1.style.opacity >= 1) {
         clearInterval(intervalid);
      } else {
         navDetails1.style.opacity = parseFloat(navDetails1.style.opacity) + 0.4;
      }
   }, 250);
   console.log(parseFloat(navDetails1.style.opacity));
});
nav1.addEventListener("mouseout", function() {
   // navDetails1.style.transition = "all 0.2s";
   // navDetails1.style.opacity = 0;
   navDetails1.style.opacity = 1;
   var intervalid = setInterval(function() {
      if (navDetails1.style.opacity == 0) {
         clearInterval(intervalid);
      } else {
         navDetails1.style.opacity = parseFloat(navDetails1.style.opacity) - 0.4;
      }
   }, 100);
});

