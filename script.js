// ==========================================
// MUHAMMED ALTHAF PORTFOLIO
// JAVASCRIPT
// ==========================================

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (event) {
    const targetId = this.getAttribute("href");

    if (targetId === "#") return;

    const target = document.querySelector(targetId);

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


// ==========================================
// SCROLL REVEAL ANIMATION
// ==========================================

const revealElements = document.querySelectorAll(
  ".label, .title, .description, .service, .project, .skill, .about-text, .about-card"
);

revealElements.forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(30px)";
  element.style.transition =
    "opacity 0.7s ease, transform 0.7s ease";
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach((element) => {
  observer.observe(element);
});


// ==========================================
// ACTIVE NAVIGATION LINK
// ==========================================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.style.color = "";

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.style.color = "#c6ff00";
    }
  });
});


// ==========================================
// PROJECT CARD CLICK EFFECT
// ==========================================

document.querySelectorAll(".project").forEach((project) => {
  project.addEventListener("click", () => {
    project.classList.toggle("active");
  });
});
