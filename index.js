// ---
const hamMenuBtn = document.querySelector(".header__main-ham-menu-cont");
const smallMenu = document.querySelector(".header__mob-menu");
const headerHamMenuBtn = document.querySelector(".header__main-ham-menu");
const headerHamMenuCloseBtn = document.querySelector(
  ".header__main-ham-menu-close"
);
const headerSmallMenuLinks = document.querySelectorAll(
  ".header__mob-menu-link"
);

hamMenuBtn.addEventListener("click", () => {
  if (smallMenu.classList.contains("header__mob-menu--active")) {
    smallMenu.classList.remove("header__mob-menu--active");
  } else {
    smallMenu.classList.add("header__mob-menu--active");
  }
  if (headerHamMenuBtn.classList.contains("hidden")) {
    headerHamMenuBtn.classList.remove("hidden");
    headerHamMenuCloseBtn.classList.add("hidden");
  } else {
    headerHamMenuBtn.classList.add("hidden");
    headerHamMenuCloseBtn.classList.remove("hidden");
  }
});

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener("click", () => {
    smallMenu.classList.remove("header__mob-menu--active");
    headerHamMenuBtn.classList.remove("hidden");
    headerHamMenuCloseBtn.classList.add("hidden");
  });
}
