const btn = document.querySelector(".to-top");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.remove("light");
    document.body.classList.add("blue");
  } else if (document.body.classList.contains("blue")) {
    document.body.classList.remove("blue");
  } else {
    document.body.classList.add("light");
  }
});
