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
// FUNCTIONS 
// Function for changing picklists text color 
function pickListsFonts (name,state) {
   state == "show" ? (name.style.color = textFontDarker)
   : (name.style.color = textFont);
}
// Function for Detailed Information in Personal Section
function hidePersonalDetails () {
   listModal.style.opacity = 0;
   personalInfo.style.display = 'none';
   personalInfo2.style.display = 'none';
   personalInfo3.style.display = 'none';
}
// Function to show/hide brief details on Personal Info, Edu Background, 
// and Skillsa. Extends the height of List Picker.
function pickListsRepeatable(hide) {
   hide.style.display = "block";
   personalList.style.height = '550px';
}
// Add Transition Delay on Personal Info, Edu Background, Skills
function pickListsTransition (hideList, show) {
   hideList.style.opacity = 0;
   if (show == 0 ) {
      pickListsRepeatable(hideList);
      hideList2.style.display = "none";
      hideList3.style.display = "none";
   } else if (show == 1) {
      pickListsRepeatable(hideList);
      hideList1.style.display = "none";
      hideList3.style.display = "none";
   } else if (show == 2) {
      pickListsRepeatable(hideList);
      hideList1.style.display = "none";
      hideList2.style.display = "none";
   }
   // transition for displaying hide pick lists
   var interValid = setInterval(function () {
      if (hideList.style.opacity >= 1) {
         clearInterval(interValid);
      } else {
         hideList.style.opacity = parseFloat(hideList.style.opacity) + 0.5;
      }
   }, 200);   
}
// Change to default color of all Pick Lists except the active one
function defaultColor (currentIndx) {
   pickLists.forEach((elem, index) => {
      if (index != currentIndx) {
         elem.style.color = textFont;
      }
   });
}
// Show/Hide Personal Details Animation
const showHiddenInfo = document.querySelector(".show-hidden-info");
function personalInfoHover (hiddenInfo, right) {
   hiddenInfo.style.paddingRight = '40px';
   right.style.transform = 'translateX(20px)';
   hiddenInfo.style.transition = 'all .5s';
   right.style.transition = 'all .5s';
}


// Personal Details Section
const personalInfo = document.querySelector(".personal-info");
const personalInfo2 = document.querySelector(".personal-info2");
const personalInfo3 = document.querySelector(".personal-info3");
const listModal = document.querySelector(".list-modal"); 
const showHiddenInfoAll = document.querySelectorAll(".show-hidden-info");
// right & down icon
const showRight = document.querySelector(".show-right");
const showRight2 = document.querySelector(".show-right2");
const showRight3 = document.querySelector(".show-right3");
const down = document.querySelector(".down");
const down2 = document.querySelector(".down2");
const down3 = document.querySelector(".down3");
showHiddenInfoAll.forEach((elem, index) => {
   listModal.style.transition = "opacity 0.3s ease";
   if (index == 0) {
         // Show More Animation on Hover
         elem.addEventListener("mouseover", function() {
            personalInfoHover(elem, showRight);
         })
         elem.addEventListener("mouseout", function() {
         elem.style.padding = '0 1rem 0 1.2rem';
         showRight.style.transform = 'translateX(0)';
         })
         // Show Personal Info on Click
         elem.addEventListener("click", function() {
         down.style.transition = "all 0.6s ease";
         personalInfo.style.display == "block" ? 
         (personalInfo.style.display = "none",listModal.style.opacity = 0)
         : (personalInfo.style.display = "block", listModal.style.opacity = 1
         );
   });   
   } else if (index == 1) {
         // Show More Animation on Hover 
         elem.addEventListener("mouseover", function() {
         personalInfoHover(elem, showRight2);
         })
         elem.addEventListener("mouseout", function() {
         elem.style.padding = '0 1rem 0 1.2rem';
         showRight2.style.transform = 'translateX(0)';
         })
         // Show Personal Info on Click
         elem.addEventListener("click", function() {
            personalInfo2.style.display == "block" ?
            (personalInfo2.style.display = "none", listModal.style.opacity = 0)
            : (personalInfo2.style.display = "block", listModal.style.opacity = 1);
      });
   } else {
         // Show More Animation on Hover 
         elem.addEventListener("mouseover", function() {
         personalInfoHover(elem, showRight3);
         })
         elem.addEventListener("mouseout", function() {
         elem.style.padding = '0 1rem 0 1.2rem';
         showRight3.style.transform = 'translateX(0)';
         })
         // Show Personal Info on Click
         elem.addEventListener("click", function() {
            personalInfo3.style.display == "block" ?
            (personalInfo3.style.display = "none", listModal.style.opacity = 0)
            : (personalInfo3.style.display = "block", listModal.style.opacity = 1);
      });
   }
});

// When Personal, Education, or Skills is clicked
const personalList = document.querySelector(".personal-list");
const hideList1 = document.querySelector(".hide-pick-list1");
const hideList2 = document.querySelector(".hide-pick-list2");
const hideList3 = document.querySelector(".hide-pick-list3");
const hideLists = document.querySelectorAll(".hide-pick-list");
// font colors
const textFontDarker = "#292828";
const textFont = "#5e5d7a";
const textPersonalDetails = "#a1a1a1";

// Pick between Personal Info, Edu background, Skills
const pickLists = document.querySelectorAll(".pick-lists");
pickLists.forEach((elem, index) => {
   personalList.style.transition = 'all .5s ease';
   if (index == 0) {
         elem.addEventListener("click", function() {
         hideList1.style.display == "block" ? (hideList1.style.display
         = "none", pickListsFonts(elem, "hide"),
         hidePersonalDetails(),
         personalList.style.height = '450px') 
         : (pickListsTransition(hideList1, index),
         hidePersonalDetails(),
         defaultColor(elem),
         pickListsFonts(elem, "show")); 
      });
   } else if (index == 1) {
         elem.addEventListener("click", function() {
         hideList2.style.display == "block" ? (hideList2.style.display
         = "none", pickListsFonts(elem, "hide"),
         hidePersonalDetails(),
         personalList.style.height = '450px') 
         : (pickListsTransition(hideList2, index),
         hidePersonalDetails(),
         defaultColor(elem),
         pickListsFonts(elem,"show")); 
      });
   } else {
         elem.addEventListener("click", function() {
         hideList3.style.display == "block" ? (hideList3.style.display
         = "none", pickListsFonts(elem,"hide"), 
         hidePersonalDetails(),
         personalList.style.height = '450px') 
         :  (pickListsTransition(hideList3, index),
         hidePersonalDetails(),
         defaultColor(elem),
         pickListsFonts(elem, "show")
         );  
      });
   }
});
// Show/Hide Personal Details Animation


// Skills Slider
const slides = document.querySelectorAll(".skills-slide");
const nextSlide = document.querySelector(".btn-next");
const prevSlide = document.querySelector(".btn-previous");
// Multiply each slide to 100% for the translateX
slides.forEach((skillSlide, index) => {
   skillSlide.style.transform = `translateX(${index * 100}%)`;
});
let sliderCounter = 0;
// Next Slider Button
nextSlide.addEventListener("click", function() {
   if (sliderCounter < slides.length - 1) {
      sliderCounter++;
      slides.forEach((skillSlide, index) => {
         skillSlide.style.transform = 
         `translateX(${(index - sliderCounter) * 100}%)`;
      });
   }
});
// Previous Slider Button
prevSlide.addEventListener("click", function() {
   if (sliderCounter > 0) {
      sliderCounter--;
      slides.forEach((skillSlide, index) => {
         skillSlide.style.transform = 
         `translateX(${(index - sliderCounter) * 100}%)`;
      });
   }
});

