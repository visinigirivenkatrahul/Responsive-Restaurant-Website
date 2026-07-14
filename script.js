/*=========================================
  Mamta Bhojnalaya
  JavaScript
==========================================*/

// ===============================
// Sticky Navbar
// ===============================

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("shadow");
  } else {
    navbar.classList.remove("shadow");
  }
});

// ===============================
// Scroll To Top Button
// ===============================

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

  if (document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300) {

    topBtn.style.display = "block";

  } else {

    topBtn.style.display = "none";
  }

};

function topFunction() {

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

}

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function (e) {

    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {

      target.scrollIntoView({

        behavior: "smooth"

      });

    }

  });

});

// ===============================
// Active Navbar Link
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {

      link.classList.add("active");

    }

  });

});

// ===============================
// Contact Form Validation
// ===============================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

  contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name =
      document.getElementById("name").value.trim();

    const email =
      document.getElementById("email").value.trim();

    const message =
      document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {

      alert("Please fill in all required fields.");

      return;

    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

      alert("Please enter a valid email address.");

      return;

    }

    alert("Thank you! Your message has been sent.");

    contactForm.reset();

  });

}

// ===============================
// Welcome Alert
// ===============================

window.addEventListener("load", function () {

  console.log("Welcome to Mamta Bhojnalaya!");

});

// ===============================
// Simple Fade Animation
// ===============================

const cards = document.querySelectorAll(
  ".feature-card, .menu-card, .review-card, .chef-card"
);

const observer = new IntersectionObserver(

  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

      }

    });

  },

  {
    threshold: 0.2,
  }

);

cards.forEach(card => {

  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "0.6s";

  observer.observe(card);

});