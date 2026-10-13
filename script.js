const btn = document.querySelector(".to-top");
const themeBtn = document.querySelector(".theme-btn");
const THEMES = ["", "theme-light", "theme-blue"];
const SCROLL_THRESHOLD = 300;

if (btn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > SCROLL_THRESHOLD) {
      btn.classList.add("to-top--show");
    } else {
      btn.classList.remove("to-top--show");
    }
  });
}

let themeIndex = 0;

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.remove("theme-light", "theme-blue");
    themeIndex = (themeIndex + 1) % THEMES.length;
    const next = THEMES[themeIndex];
    if (next) {
      document.body.classList.add(next);
    }
  });
}
