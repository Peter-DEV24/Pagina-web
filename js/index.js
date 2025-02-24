AOS.init();

const timeTimeOut = 3500;
const time = 300;

const introLogo = document.querySelector("#intro_logo");
const hero = document.querySelector("#hero");
const imgHero1 = document.querySelector("#img_hero_1");
const imgHero2 = document.querySelector("#img_hero_2");
const spanIcon = document.querySelector("#span_icon");
const body = document.querySelector("body");
const favicon = document.querySelector("#favicon");

const animation_1 = () => {
   introLogo.classList.add("d-none");
}

const animation_2 = () => {
   hero.classList.add("fade_in");
   imgHero1.classList.add("img_left_right");
   imgHero2.classList.add("img_right_left");
}

const animation_3 = () => {
   spanIcon.classList.remove("d-none");
   body.classList.remove("scroll-y-none");
}

const updateLogoForDarkMode = () => {
   let logo = window.matchMedia('(prefers-color-scheme: dark)').matches ? "assets/crown_logo_white.png" : "assets/crown_logo.png";
   favicon.href = logo;
}

window.matchMedia('(prefers-color-scheme: dark)').addListener(updateLogoForDarkMode);
updateLogoForDarkMode();  // Inicializa el logo según el modo oscuro

window.onscroll = () => {
   const position = window.pageYOffset || document.documentElement.scrollTop;
   document.getElementById("img_hamburger_1").style.bottom = `${position * 0.01}px`;
}

document.addEventListener("DOMContentLoaded", () => {
   body.classList.add("scroll-y-none");
   imgHero1.classList.remove("img_left_right");
   imgHero2.classList.remove("img_right_left");

   const animations = () => {
      setTimeout(() => {
         animation_1();
         setTimeout(() => {
            animation_2();
            setTimeout(() => {
               animation_3();
            }, time + 2500);
         }, time);
      }, timeTimeOut);
   }
   animations();
});
