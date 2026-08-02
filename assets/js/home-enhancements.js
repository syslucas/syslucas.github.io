const revealItems = Array.from(document.querySelectorAll(".reveal-on-scroll"));
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if ("IntersectionObserver" in window && revealItems.length > 0 && !prefersReducedMotion) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  const pendingItems = revealItems.filter((item) => item.getBoundingClientRect().top >= window.innerHeight);

  pendingItems.forEach((item, index) => {
    item.classList.add("reveal-pending");
    item.style.transitionDelay = `${Math.min(index * 35, 140)}ms`;
    observer.observe(item);
  });
}
