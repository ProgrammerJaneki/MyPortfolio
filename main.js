// const nav1 = document.querySelector(".nav1");
// const navDetails1 = document.querySelector(".nav-details");
// Nagivation Opacity Transition
// nav1.addEventListener("mouseover", function() {
//    navDetails1.style.opacity = 0;
//    var intervalid = setInterval(function() {
//       if (navDetails1.style.opacity >= 1) {
//          clearInterval(intervalid);
//       } else {
//          navDetails1.style.opacity = parseFloat(navDetails1.style.opacity) + 0.4;
//       }
//    }, 250);
//    console.log(parseFloat(navDetails1.style.opacity));
// });
// nav1.addEventListener("mouseout", function() {
//    navDetails1.style.opacity = 1;
//    var intervalid = setInterval(function() {
//       if (navDetails1.style.opacity == 0) {
//          clearInterval(intervalid);
//       } else {
//          navDetails1.style.opacity = parseFloat(navDetails1.style.opacity) - 0.4;
//       }
//    }, 100);
// });

// Personal Details Section
const personalInfo = document.querySelector(".personal-info");
const listModal = document.querySelector(".list-modal");
const pickLists = document.querySelectorAll(".pick-lists");

pickLists.forEach((elem, index) => {
   if (index == 0) {
         elem.addEventListener("click", function() {
      personalInfo.style.display = 'block';
   });   
   } else if (index == 1) {
      elem.addEventListener("click", function() {
         console.log('No.2');
      });
   }
   // elem.style.color = 'red';
   listModal.style.display = 'block';
});


