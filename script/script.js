// Fixed Navbar scroll

const heroElement = document.querySelector("header.hero");
const heroObserver = new IntersectionObserver(
  (entries) => {
    const [entry] = entries;

    if (entry.isIntersecting) {
      document.querySelector("nav").classList.add("scrolled");
    } else {
      //   document.querySelector("nav").classList.remove("scrolled");
    }
  },
  { threshold: 1.1 }
);

heroObserver.observe(heroElement);

// Form Validation
