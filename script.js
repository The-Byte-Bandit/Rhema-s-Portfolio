

// Carousel functionality
const slidesContainer = document.querySelector('.slides-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slideWidth = slidesContainer.clientWidth;
let slideIndex = 0;

// Set initial position of slides
slidesContainer.style.transform = `translateX(-${slideWidth * slideIndex}px)`;

// Move to the previous slide
prevBtn.addEventListener('click', () => {
  if (slideIndex === 0) {
    slideIndex = slidesContainer.children.length - 1;
  } else {
    slideIndex--;
  }

  slidesContainer.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
});

// Move to the next slide
nextBtn.addEventListener('click', () => {
  if (slideIndex === slidesContainer.children.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }

  slidesContainer.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
});


  // Toggle menu icon and menu items
  const menuIcon = document.querySelector('.menu-icon');
  const menuItems = document.querySelector('.menu-items');

  menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('open');
  });

  const popup = document.getElementById("popup");

  function showPopup(){
    popup.style.display = "block";
  };

  function closePopup() {
    popup.style.display = "none";
  }

  const popup1 = document.getElementById("popup1");

  document.getElementById("showPopup1").addEventListener("click", () => {
    popup1.style.display = "block";
    
  });

  function closePopup1() {
    popup1.style.display = "none";
  }


 
 
let d = document.querySelector(".btn1");
let code = document.querySelector(".btn2");

function change1(){
  document.querySelector(".text1").style.visibility='hidden';
  document.querySelector(".showPopup").style.visibility='hidden';
  document.querySelector(".high2").style.visibility='hidden';
  document.querySelector(".high1").style.visibility='visible';
  document.querySelector(".insgrm").style.visibility='hidden';
  document.querySelector(".link").style.visibility='hidden';
  document.querySelector(".tpbar").style.visibility='hidden';
  document.querySelector(".carousel-container ").style.visibility='hidden'
  document.querySelector(".card-container").style.visibility='visible';

}

function change2(){
  document.querySelector(".text1").style.visibility='visible';
  document.querySelector(".showPopup").style.visibility='visible';
  document.querySelector(".high2").style.visibility='visible';
  document.querySelector(".high1").style.visibility='hidden';
  document.querySelector(".insgrm").style.visibility='visible';
  document.querySelector(".link").style.visibility='visible';
  document.querySelector(".tpbar").style.visibility='visible';
  document.querySelector(".carousel-container ").style.visibility='visible'
  document.querySelector(".card-container").style.visibility='hidden';

}

function changeAbout1(){
  document.querySelector(".about2").style.visibility='visible';
  document.querySelector(".age").style.visibility='visible'; 
  document.querySelector(".ahigh1").style.visibility= 'visible';
  document.querySelector(".ahigh2").style.visibility= 'hidden';
  document.querySelector(".ahigh3").style.visibility= 'hidden';
  document.querySelector(".nation").style.visibility='visible';
  document.querySelector(".skills").style.visibility='hidden';
  document.querySelector(".ability").style.visibility= 'hidden';
  document.querySelector(".ab1").style.visibility= 'hidden';
  document.querySelector(".chubhello").style.visibility='visible';
  document.querySelector(".chubhello2").style.visibility='hidden';
  document.querySelector(".chubhello3").style.visibility='hidden';
  document.querySelector(".spinner").style.visibility='hidden';
  document.querySelector(".spinner2").style.visibility='hidden';
  document.querySelector(".spinner3").style.visibility='hidden';




  document.querySelector(".ui1").classList.add('bcolor');
  document.querySelector(".ui2").classList.remove('bcolor');
  document.querySelector(".ui3").classList.remove('bcolor');

}
function changeAbout2(){
  document.querySelector(".about2").style.visibility='hidden';
  document.querySelector(".ahigh1").style.visibility= 'hidden';
  document.querySelector(".ahigh2").style.visibility= 'visible';
  document.querySelector(".ahigh3").style.visibility= 'hidden';
  document.querySelector(".ability").style.visibility= 'hidden';
  document.querySelector(".ab1").style.visibility= 'hidden';
  document.querySelector(".age").style.visibility='hidden'; 
  document.querySelector(".nation").style.visibility='hidden';
  document.querySelector(".skills").style.visibility='visible';
  document.querySelector(".chubhello").style.visibility='hidden';
  document.querySelector(".chubhello2").style.visibility='visible';
  document.querySelector(".chubhello3").style.visibility='hidden';
  document.querySelector(".spinner").style.visibility='hidden';
  document.querySelector(".spinner2").style.visibility='hidden';
  document.querySelector(".spinner3").style.visibility='hidden';



  document.querySelector(".ui1").classList.remove('bcolor');
  document.querySelector(".ui2").classList.add('bcolor');
  document.querySelector(".ui3").classList.remove('bcolor');
}
function changeAbout3(){
  document.querySelector(".about2").style.visibility='hidden';
  document.querySelector(".ahigh1").style.visibility= 'hidden';
  document.querySelector(".ahigh2").style.visibility= 'hidden';
  document.querySelector(".ahigh3").style.visibility= 'visible';
  document.querySelector(".ability").style.visibility= 'visible';
  document.querySelector(".ab1").style.visibility= 'visible';
  document.querySelector(".age").style.visibility='hidden'; 
  document.querySelector(".nation").style.visibility='hidden';
  document.querySelector(".skills").style.visibility='hidden';
  document.querySelector(".chubhello").style.visibility='hidden';
  document.querySelector(".chubhello2").style.visibility='hidden';
  document.querySelector(".chubhello3").style.visibility='visible';
  document.querySelector(".spinner").style.visibility='visible';
  document.querySelector(".spinner2").style.visibility='visible';
  document.querySelector(".spinner3").style.visibility='visible';


  document.querySelector(".ui1").classList.remove('bcolor');
  document.querySelector(".ui2").classList.remove('bcolor');
  document.querySelector(".ui3").classList.add('bcolor');
}


function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

function handleScroll() {
  var slideIns = document.querySelectorAll('.anav');
  var about2 = document.querySelectorAll('.about2');
  var age = document.querySelectorAll('.age');
  var nation = document.querySelectorAll('.nation');
  var hprojects = document.querySelectorAll('.projects');
  var tool = document.querySelectorAll('.tool');
  var card = document.querySelectorAll('.card-container ');
  var mascot = document.querySelectorAll('.chubhello');






  slideIns.forEach(function(el) {
      if (isElementInViewport(el)) {
          el.classList.add('slide-in-active');
      }
  });

  about2.forEach(function(el) {
    if (isElementInViewport(el)) {
        el.classList.add('slide-in-active');
    }
});

   age.forEach(function(el) {
      if (isElementInViewport(el)) {
          el.classList.add('slide-in-active');
      }
  });

  nation.forEach(function(el) {
    if (isElementInViewport(el)) {
        el.classList.add('slide-in-active');
    }
});
  hprojects.forEach(function(el) {
    if (isElementInViewport(el)) {
        el.classList.add('slide-in-active');
    }
});

   tool.forEach(function(el) {
    if (isElementInViewport(el)) {
        el.classList.add('slide-in-active');
    }
});
    card.forEach(function(el) {
  if (isElementInViewport(el)) {
      el.classList.add('slide-in-active');
  }
});

   mascot.forEach(function(el) {
  if (isElementInViewport(el)) {
      el.classList.add('slide-in-active');
  }
});


}

// Attach the handleScroll function to the scroll event
window.addEventListener('scroll', handleScroll);
// Trigger the animation for elements already in the viewport on page load
handleScroll();