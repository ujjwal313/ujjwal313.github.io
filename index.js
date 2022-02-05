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


if (window.matchMedia("(min-width: 768px)").matches) {
  let mousePosX = 0,
    mousePosY = 0,
    mouseCircle = document.getElementById("cursor");

  document.onmousemove = (e) => {
    mousePosX = e.pageX;
    mousePosY = e.pageY;
  };

  let delay = 1,
    revisedMousePosX = 0,
    revisedMousePosY = 0;

  function delayMouseFollow() {
    requestAnimationFrame(delayMouseFollow);

    revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
    revisedMousePosY += (mousePosY - revisedMousePosY) / delay;

    mouseCircle.style.top = revisedMousePosY + "px";
    mouseCircle.style.left = revisedMousePosX + "px";
  }
  delayMouseFollow();
}