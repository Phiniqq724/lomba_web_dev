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
const checkbox = document.querySelector("#toggle");
const html = document.querySelector("html");
const navnav = document.getElementById("navnav");
const p = document.querySelectorAll("p");
const jumbotron = document.querySelector(".jumbotron");
const backdrops = document.querySelector("div.jumbotron div#backdrops");
const garis = document.getElementById("garis");
const display1 = document.querySelector(".display-1");

checkbox.addEventListener("click", function () {
  checkbox.checked ? html.setAttribute("data-bs-theme", "dark") : html.removeAttribute("data-bs-theme", "dark");
  checkbox.checked ? navnav.classList.add("bg-dark") : navnav.classList.remove("bg-dark");
  checkbox.checked ? p.setAttribute("class", "text-white") : p.removeAttribute("class", "text-white");
});

checkbox.addEventListener("click", function () {
  checkbox.checked ? backdrops.classList.add("jumbotron-backdrop") : backdrops.classList.remove("jumbotron-backdrop");
  checkbox.checked ? garis.classList.add("border-white") : garis.classList.add("border-black") || garis.classList.remove("border-white");
});
checkbox.addEventListener("click", function () {
  checkbox.checked ? display1.classList.add("shadow-whites") : display1.classList.remove("shadow-whites");
});

// Form Validation
//ok

// slider
$(".slider").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
