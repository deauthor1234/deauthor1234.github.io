//Swiper
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    530: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      pagination: {
        el: false,
      },
    },
    950: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});

var swiper = new Swiper(".swiper-content", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".slide-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    530: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      pagination: {
        el: false,
      },
    },
    950: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});