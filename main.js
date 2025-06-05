// 부드러운 스크롤링
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// 스크롤 시 페이드인 애니메이션
const fadeElements = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

fadeElements.forEach((element) => observer.observe(element));

// 히어로 텍스트 동적 애니메이션
const heroText = document.querySelector(".hero h1");
let hue = 0;
setInterval(() => {
  hue = (hue + 1) % 360;
  heroText.style.textShadow = `0 0 10px hsl(${hue}, 70%, 50%)`;
}, 50);
