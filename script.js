const btn = document.querySelector(".to-top");
const themeBtn = document.querySelector(".theme-btn");

if (btn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btn.classList.add("to-top--show");
    } else {
      btn.classList.remove("to-top--show");
    }
  });
}

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    if (document.body.classList.contains("theme-light")) {
      document.body.classList.remove("theme-light");
      document.body.classList.add("theme-blue");
    } else if (document.body.classList.contains("theme-blue")) {
      document.body.classList.remove("theme-blue");
    } else {
      document.body.classList.add("theme-light");
    }
  });
}
