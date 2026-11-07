const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");
if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }));
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Reveal sections smoothly as they enter the viewport.
const revealTargets = document.querySelectorAll(
  ".section-label, .about-grid, .journey-strip, .section-heading-row, .service-card, .expertise-panel, .work-card, .contact-wrap"
);
revealTargets.forEach((element, index) => {
  element.classList.add("js-reveal");
  if (element.matches(".service-card, .work-card")) {
    element.style.transitionDelay = `${(index % 3) * 90}ms`;
  }
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
  revealTargets.forEach(element => observer.observe(element));
} else {
  revealTargets.forEach(element => element.classList.add("is-visible"));
}
