document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelectorAll(
      ".info_ p, .category_li .category_p, .footer_title ,.main_title"
    )
    .forEach((element) => {
      element.textContent = element.textContent.toUpperCase();
    });
});

// let categoryBtn = document.querySelector(".category_btn");
// let categoryBox = document.querySelector(".category_ul");
// let categoryBlock = document.querySelector(".category_");
// let closeIcon = document.querySelector(".close");
// let burgerIcon = document.querySelector(".burger_");
// closeIcon.style.display = "none";
// categoryBtn.addEventListener("click", function () {
//   categoryBlock.classList.add("custom_styles");
//   categoryBox.style.display =
//     categoryBox.style.display === "block" ? "none" : "block";

//   // Toggle visibility of burgerIcon and closeIcon
//   if (closeIcon.style.display === "none") {
//     burgerIcon.style.display = "none";
//     closeIcon.style.display = "block";
//   } else {
//     burgerIcon.style.display = "block";
//     closeIcon.style.display = "none";
//   }
// });

// document.addEventListener("click", function (event) {
//   if (
//     !categoryBtn.contains(event.target) &&
//     !categoryBox.contains(event.target)
//   ) {
//     burgerIcon.style.display = "block";
//     closeIcon.style.display = "none";
//     categoryBox.style.display = "none";
//     categoryBlock.classList.remove("custom_styles");
//   }
// });

let categoryBtn = document.querySelector(".category_btn");
let categoryBox = document.querySelector(".category_ul");
let categoryBlock = document.querySelector(".category_");
let closeIcon = document.querySelector(".close");
let burgerIcon = document.querySelector(".burger_");
let body = document.querySelector("body");
let html = document.querySelector("html");

// Initially hide closeIcon
closeIcon.style.display = "none";

function toggleMenu() {
  categoryBlock.classList.toggle("custom_styles");
  categoryBox.style.display =
    categoryBox.style.display === "block" ? "none" : "block";

  burgerIcon.style.display =
    burgerIcon.style.display === "none" ? "block" : "none";
  closeIcon.style.display =
    closeIcon.style.display === "none" ? "block" : "none";

  const overflowStyle = burgerIcon.style.display === "none" ? "hidden" : "auto";
  body.style.overflow = overflowStyle;
  html.style.overflow = overflowStyle;
}

categoryBtn.addEventListener("click", toggleMenu);

document.addEventListener("click", function (event) {
  if (
    !categoryBtn.contains(event.target) &&
    !categoryBox.contains(event.target)
  ) {
    burgerIcon.style.display = "block";
    closeIcon.style.display = "none";
    categoryBox.style.display = "none";
    categoryBlock.classList.remove("custom_styles");
    body.style.overflow = "auto";
    html.style.overflow = "auto";
  }
});

var swiper = new Swiper(".s1", {
  direction: "vertical",
  slidesPerView: 1,
  mousewheel: true,
  pagination: {
    el: ".s1 .swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".s2", {
  slidesPerView: 2,
  spaceBetween: 24,
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 3,
    },
    1300: {
      slidesPerView: 4,
    },
    1440: {
      slidesPerView: 5,
    },
    1680: {
      slidesPerView: 6,
    },
  },
  navigation: {
    nextEl: ".navigations_ .swiper-button-next",
    prevEl: ".navigations_ .swiper-button-prev",
  },
});

var swiper = new Swiper(".s3", {
  slidesPerView: 6,
  spaceBetween: 24,
  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 3,
    },
    1300: {
      slidesPerView: 4,
    },
    1440: {
      slidesPerView: 5,
    },
    1680: {
      slidesPerView: 6,
    },
  },
  navigation: {
    nextEl: ".navigations_ .swiper-button-next",
    prevEl: ".navigations_ .swiper-button-prev",
  },
});
