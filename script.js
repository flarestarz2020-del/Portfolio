const reveals = document.querySelectorAll(".reveal");
const progress = document.getElementById("scrollBar");
const parallaxItems = document.querySelectorAll(".parallax");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.18,
  }
);

reveals.forEach((item) => revealObserver.observe(item));

const updateScrollEffects = () => {
  const scrollTop = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const percent = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
  progress.style.width = `${percent}%`;

  parallaxItems.forEach((item) => {
    const speed = Number(item.dataset.speed || 0);
    const rect = item.getBoundingClientRect();
    const offset = (window.innerHeight / 2 - rect.top) * speed;
    item.style.setProperty("--parallax", `${offset.toFixed(2)}px`);
  });
};

updateScrollEffects();
window.addEventListener("scroll", updateScrollEffects, { passive: true });
window.addEventListener("resize", updateScrollEffects);
