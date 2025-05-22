window.addEventListener('DOMContentLoaded', () => {
  console.log('Loaded Scripts')

  // Testimonials slider
  const testimonialSwiper = new Swiper(".swiper-main-block", {
    slidesPerView: 2,
    spaceBetween: 24,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      769: {
        slidesPerView: 1,
      },
      1025: {
        slidesPerView: 2,
      },
      1346: {
        slidesPerView: 2,
      }
    }
  });

  const howWorkSlider = new Swiper(".how-work-slider", {
    slidesPerView: 4,
    spaceBetween: 24,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      769: {
        slidesPerView: 2,
      },
      1025: {
        slidesPerView: 3,
      },
      1346: {
        slidesPerView: 4,
      }
    }
  });

  const blogPostSwiper = new Swiper('.swiper-blog-post', {
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1199: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 24,
      }
    }
  });
})

document.addEventListener('DOMContentLoaded', function () {
  const burgerButton = document.getElementById('burger-button');
  const closeMenuButton = document.getElementById('burger-button-close');
  const mobileMenu = document.getElementById('mobile-menu');

  const toggleMenu = () => {
    mobileMenu.classList.toggle('active');
    burgerButton.classList.toggle('open');
    document.body.classList.toggle('overflow-hidden');
  };

  const closeMenu = () => {
    document.body.classList.toggle('overflow-hidden');
    mobileMenu.classList.remove('active');
    burgerButton.classList.remove('open');
  }

  burgerButton?.addEventListener('click', toggleMenu);
  closeMenuButton?.addEventListener('click', closeMenu);
})
