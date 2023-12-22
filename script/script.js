// Fixed Navbar scroll
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("navnav").classList.add("scrolled");
  } else {
    document.getElementById("navnav").classList.remove("scrolled");
  }
}

// logic dark mode

// Form Validation
