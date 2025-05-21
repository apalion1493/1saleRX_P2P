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
        navigation: {
          enabled: false,
        },
        pagination: {
          enabled: false,
        }
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 24,
        navigation: {
          enabled: false,
        },
        pagination: {
          enabled: false,
        }
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

document.addEventListener("DOMContentLoaded", function () {
  const wrapperForm = document.getElementById("wrapperFormSmall");
  const form = wrapperForm.querySelector("form");
  const thankYouMessage = document.getElementById("thankYouMessageSmall");
  const resetButton = document.getElementById("resetFormButton_small");

  // Функция для отображения ошибки
  function showError(input, message) {
    const errorText = input.closest(".form-group").querySelector("small");
    errorText.textContent = message;
    errorText.classList.remove("hidden");
  }

  // Функция для очистки ошибки
  function clearError(input) {
    const errorText = input.closest(".form-group").querySelector("small");
    errorText.classList.add("hidden");
  }

  // Функция для валидации формы
  function validateForm() {
    let isValid = true;

    const fullName = document.getElementById("nameID_small");
    const email = document.getElementById("mailID_small");
    const consent = form.querySelector("input[name='consent']");

    // Проверка поля "Full name"
    if (fullName.value.trim() === "") {
      showError(fullName, "Full name is required");
      isValid = false;
    } else {
      clearError(fullName);
    }

    // Проверка email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value.trim())) {
      showError(email, "Enter a valid email");
      isValid = false;
    } else {
      clearError(email);
    }

    // Проверка согласия
    if (!consent.checked) {
      showError(consent, "You must accept the terms");
      isValid = false;
    } else {
      clearError(consent);
    }

    return isValid;
  }

  // Обработчик отправки формы
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!validateForm()) return;

    const formData = new FormData(form);

    axios.post("http://localhost:3000/send-form", formData)
      .then(response => {
        console.log("Success:", response.data);
        form.reset();
        wrapperForm.classList.add("hidden");
        thankYouMessage.classList.remove("hidden");
      })
      .catch(error => {
        console.error("Error:", error.response?.data || error.message);
      });
  });

  // Обработчик кнопки "Return to the Form"
  resetButton.addEventListener("click", function () {
    thankYouMessage.classList.add("hidden");
    wrapperForm.classList.remove("hidden");
  });
});
