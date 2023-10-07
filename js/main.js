// Variables
const menuIcon = document.querySelector("#menu-icon");
const menuItems = document.querySelector("#menu-items");
const scrollToTopButton = document.querySelector("#scroll-top");
let isOpen = false;

// EVENT LISTENERS
menuIcon.addEventListener("click", menuViewer);
window.addEventListener("scroll", scrollButton);

// for hide and unhide navigation menu
function menuViewer() {
  isOpen = !isOpen;
  console.log(isOpen);
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
