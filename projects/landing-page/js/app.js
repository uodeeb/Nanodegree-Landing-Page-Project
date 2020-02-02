// jshint esversion: 6

/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation, //You're going to make links (or nav links) that will jump to anchors
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
let sections = document.querySelectorAll("section");
const navBarList = document.getElementById("navbar__list");
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
/**
 * End Global Variables
 * Start Helper Functions
 *
*/
// function isScrolledIntoView(elem)
// {
//     var docViewTop = $(window).scrollTop();
//     var docViewBottom = docViewTop + $(window).height();
//
//     var elemTop = $(elem).offset().top;
//     var elemBottom = elemTop + $(elem).height();
//     // console.log((elemBottom <= docViewBottom) && (elemTop >= docViewTop));  //true means in view
//     return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// }

function isScrolledIntoView(elem, sectns)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    // console.log((elemBottom <= docViewBottom) && (elemTop >= docViewTop));  //true means in view
    if((elemBottom <= docViewBottom) && (elemTop >= docViewTop)){
      elem.classList.add("your-active-class");

      // for (let i = 0; i < sectns.length; ++i) {
      //   if(sectns[i] !== elem){
      //       sectns[i].classList.remove("your-active-class");
      //   }
      // }

      for(const sect in sectns){
        if(sect.value !== elem){
            sect.value.classList.remove("your-active-class");
        }
      }
    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
for (const section of sections){
  const dataNav = section.getAttribute("data-nav");
  const li = document.createElement("li");
  const anchor = document.createElement("a");
  li.innerHTML = dataNav;
  const lc_dataNav = dataNav.toLowerCase();
  const lc_NoSpace_dataNav = lc_dataNav.replace(/ /g, "");
  anchor.href = "#"+lc_NoSpace_dataNav;
  navBarList.appendChild(anchor).appendChild(li);
}



// Add class 'active' to section when near top of viewport

window.addEventListener('scroll', () =>{
    isScrolledIntoView(...sections, sections);
   //  if (isScrolledIntoView(section1)){
   //    section1.classList.add("your-active-class");
   //    section2.classList.remove("your-active-class");
   //    section3.classList.remove("your-active-class");
   //  }
   //  else if (isScrolledIntoView(section2))
   //  {
   //    section2.classList.add("your-active-class");
   //    section1.classList.remove("your-active-class");
   //    section3.classList.remove("your-active-class");
   //  }
   //  else if (isScrolledIntoView(section3))
   //  {
   //    section3.classList.add("your-active-class");
   //    section1.classList.remove("your-active-class");
   //    section2.classList.remove("your-active-class");
   // }
});

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
