/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
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

let parts = document.querySelectorAll("section");
const myNav = document.querySelector("#navbar__list");
const navBar = document.createDocumentFragment();
const myMain = document.querySelector('main');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function renderNavBar() {
    for (let l = 0; l < parts.length; l = l + 1) {

        let element = parts[l];
        const linkName = element.getAttribute('data-nav');
        const navList = document.createElement('li');
        const navLink = document.createElement('a');
        const linkText = document.createTextNode(linkName);
        const linkId = element.getAttribute('id');

        navLink.setAttribute('href', '#' + linkId);
        navLink.appendChild(linkText);
        navList.appendChild(navLink);
        navBar.appendChild(navList);
    };

    myNav.innerHTML = "";

    myNav.appendChild(navBar);

  };

// To render Nav bar for the first time
renderNavBar();

// Add class 'active' to section when near top of viewport

window.addEventListener( 'scroll', ()=> {
    for (let l = 0; l < parts.length; l = l + 1) {

        let part = parts[l];
        const rec = part.getBoundingClientRect();

        if (rec.top > 0 && rec.top < 300) {

            for (let l = 0; l < parts.length; l = l + 1) {
                let part = parts[l];
                part.removeAttribute('class');
            }

           part.setAttribute('class', 'your-active-class');

           const links = document.querySelectorAll("a");

           for (let b = 0; b < links.length; b = b + 1) {
               let actLink = links[b];

               if (part.getAttribute('data-nav') == actLink.textContent) {

                    links.forEach( (remover)=> {
                        remover.removeAttribute('class');
                        actLink.setAttribute('class', 'your-active-class');
                    })
               }
           }
        }

    };
})

// Scroll to top using scrollTO event

//Get the button:
myButton = document.getElementById("to-top");

// When the user scrolls down 400px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function toTopFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Generate New Section
const gnButton = document.getElementById("gn");

gnButton.onclick = function() {generateNewSection()};

function generateNewSection() {
    let nSec = document.createElement('section');
    let parts = document.querySelectorAll("section");
    nSec.setAttribute('id', 'section' + (parts.length+1));
    nSec.setAttribute('data-nav', 'section ' + (parts.length+1));

    const nDiv = document.createElement('div');
    nDiv.setAttribute('class', 'landing__container');

    nSec.appendChild(nDiv);

    const nHeading = document.createElement('h2');
    const headingText = document.createTextNode('section ' + (parts.length+1));

    nHeading.appendChild(headingText);

    const nParOne = document.createElement('p');
    const parOneText = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.');

    nParOne.appendChild(parOneText);

    const nParTwo = document.createElement('p');
    const parTwoText = document.createTextNode('Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.');

    nParTwo.appendChild(parTwoText);

    nDiv.appendChild(nHeading);
    nDiv.appendChild(nParOne);
    nDiv.appendChild(nParTwo);

    myMain.appendChild(nSec);
    renderNavBar();
};

renderNavBar();

// Set sections as active


/* Toggle between adding and removing the "responsive" class to top_nav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("navbar__list");
    if (x.className === "top_nav") {
      x.className += "_responsive";
    } else {
      x.className = "top_nav";
    }
  }