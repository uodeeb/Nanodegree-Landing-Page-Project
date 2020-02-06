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
const sections = document.querySelectorAll("section");
/**
 * End Global Variables
 * Start Helper Functions
 *
*/

const isScrolledIntoView = (elem) =>
{
    const docViewTop = $(window).scrollTop();
    const docViewBottom = docViewTop + $(window).height();

    const elemTop = $(elem).offset().top;
    const elemBottom = elemTop + $(elem).height();
    // console.log((elemBottom <= docViewBottom) && (elemTop >= docViewTop));  //true means in view
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
};

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
  li.classList.add(`${section.id}`+"_link");
  const lc_dataNav = dataNav.toLowerCase();
  const lc_NoSpace_dataNav = lc_dataNav.replace(/ /g, "");
  anchor.href = "#"+lc_NoSpace_dataNav;
  const navBarList = document.getElementById("navbar__list");
  navBarList.appendChild(anchor).appendChild(li);
}



// Add class 'active' to section when near top of viewport

window.addEventListener('scroll', () =>{
  sections.forEach(section => {
    if (isScrolledIntoView(section)) {
      section.classList.add("your-active-class");
      $("."+`${section.id}`+"_link")[0].classList.add("active");
    } else {
      section.classList.remove("your-active-class");
      $("."+`${section.id}`+"_link")[0].classList.remove("active");
    }
  });

  $("navbar__menu").slideDown();
  setTimeout(function(){ $("navbar__menu").slideUp(); }, 250);
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
