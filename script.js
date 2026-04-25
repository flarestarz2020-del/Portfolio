const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
      }
    });
  },
  { threshold: 0.12 }
);

reveals.forEach((el) => observer.observe(el));
