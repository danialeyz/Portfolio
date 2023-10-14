// Variables
const menuIcon = document.querySelector("#menu-icon");
const menuItems = document.querySelector("#menu-items");
const scrollToTopButton = document.querySelector("#scroll-top");
const section6Cards = document.querySelector(".section-6-cards-container-1");
let isOpen = false;

// EVENT LISTENERS
menuIcon.addEventListener("click", menuViewer);
window.addEventListener("scroll", scrollButton);
section6Cards.addEventListener("click", section6Scroll);
menuItems.addEventListener("click", menuViewer);

// for hide and unhide navigation menu
function menuViewer() {
  isOpen = !isOpen;
  if (isOpen) {
    menuItems.style.display = "flex";
  } else if (isOpen == false) {
    menuItems.style.display = "none";
  }
}

//For scroll to top button settings
function scrollButton() {
  if (window.scrollY < 200) {
    scrollToTopButton.style.display = "none";
  } else {
    scrollToTopButton.style.display = "block";
  }
}

// For section 6 scroll

function section6Scroll(e) {
  // for getting pointer target element classlist
  const className = [...e.target.classList];
  const item = e.target;

  // right
  if (className[0] == "right") {
    document.querySelector(".section-6-cards-container-2").scrollLeft += 400;
  } else if (className[0] == "left") {
    document.querySelector(".section-6-cards-container-2").scrollLeft -= 400;
  } // Left
}
