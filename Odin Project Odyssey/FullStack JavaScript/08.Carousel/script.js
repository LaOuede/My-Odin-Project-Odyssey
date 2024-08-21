document.addEventListener("DOMContentLoaded", () => {
  // Variables
  const tracker = document.querySelector(".tracker");
  const slides = Array.from(tracker.children);
  const nextBtn = document.querySelector(".carousel_button--right");
  const prevBtn = document.querySelector(".carousel_button--left");
  const navBar = document.querySelector(".carousel_nav");
  const navBtns = Array.from(navBar.children);
  let slidesWidth = slides[0].getBoundingClientRect().width;
  let direction = 1;
  let autoSlideInterval = setInterval(autoSlide, 5000);

  // Functions
  const setSlidesPosition = () => {
    slidesWidth = slides[0].getBoundingClientRect().width;
    slides.forEach((slide, index) => {
      slide.style.left = slidesWidth * index + "px";
    });
  };

  const toSlide = (tracker, slideDisplayed, targetSlide) => {
    tracker.style.transform = "translateX(-" + targetSlide.style.left + ")";
    slideDisplayed.classList.remove("slide_displayed");
    targetSlide.classList.add("slide_displayed");
  };

  const updateBtns = (currentBtn, targetBtn) => {
    currentBtn.classList.remove("slide_displayed");
    targetBtn.classList.add("slide_displayed");
  };

  const displayArrowBtn = (slides, prevBtn, nextBtn, targetIndex) => {
    if (targetIndex === 0) {
      prevBtn.classList.add("is_hidden");
      nextBtn.classList.remove("is_hidden");
    } else if (targetIndex === slides.length - 1) {
      prevBtn.classList.remove("is_hidden");
      nextBtn.classList.add("is_hidden");
    } else {
      prevBtn.classList.remove("is_hidden");
      nextBtn.classList.remove("is_hidden");
    }
  };

  // EventListener
  window.addEventListener("resize", setSlidesPosition);

  prevBtn.addEventListener("click", () => {
    stopAutoSlide();
    const slideDisplayed = tracker.querySelector(".slide_displayed");
    const prevSlide = slideDisplayed.previousElementSibling;
    if (!prevSlide) return;
    const currentBtn = navBar.querySelector(".slide_displayed");
    const prevBarBtn = currentBtn.previousElementSibling;
    const prevIndex = slides.findIndex((slide) => slide === prevSlide);

    toSlide(tracker, slideDisplayed, prevSlide);
    updateBtns(currentBtn, prevBarBtn);
    displayArrowBtn(slides, prevBtn, nextBtn, prevIndex);
    restartAutoSlide();
  });

  nextBtn.addEventListener("click", () => {
    stopAutoSlide();
    const slideDisplayed = tracker.querySelector(".slide_displayed");
    const nextSlide = slideDisplayed.nextElementSibling;
    if (!nextSlide) return;
    const currentBtn = navBar.querySelector(".slide_displayed");
    const nextBarBtn = currentBtn.nextElementSibling;
    const nextIndex = slides.findIndex((slide) => slide === nextSlide);

    toSlide(tracker, slideDisplayed, nextSlide);
    updateBtns(currentBtn, nextBarBtn);
    displayArrowBtn(slides, prevBtn, nextBtn, nextIndex);
    restartAutoSlide();
  });

  navBar.addEventListener("click", (e) => {
    stopAutoSlide();
    const targetBtn = e.target.closest("button");
    if (!targetBtn) return;

    const slideDisplayed = tracker.querySelector(".slide_displayed");
    const currentBtn = navBar.querySelector(".slide_displayed");
    const targetIndex = navBtns.findIndex((btn) => btn === targetBtn);
    const targetSlide = slides[targetIndex];

    toSlide(tracker, slideDisplayed, targetSlide);
    updateBtns(currentBtn, targetBtn);
    displayArrowBtn(slides, prevBtn, nextBtn, targetIndex);
    restartAutoSlide();
  });

  // AutoSlide
  function autoSlide() {
    const slideDisplayed = tracker.querySelector(".slide_displayed");
    const currentBtn = navBar.querySelector(".slide_displayed");
    let nextSlide, nextBarBtn;

    if (direction === 1) {
      nextSlide = slideDisplayed.nextElementSibling;
      nextBarBtn = currentBtn.nextElementSibling;
    } else {
      nextSlide = slideDisplayed.previousElementSibling;
      nextBarBtn = currentBtn.previousElementSibling;
    }

    if (!nextSlide) {
      direction *= -1;
      autoSlide();
      return;
    }

    const nextIndex = slides.findIndex((slide) => slide === nextSlide);

    toSlide(tracker, slideDisplayed, nextSlide);
    updateBtns(currentBtn, nextBarBtn);
    displayArrowBtn(slides, prevBtn, nextBtn, nextIndex);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  function restartAutoSlide() {
    stopAutoSlide();
    autoSlideInterval = setInterval(autoSlide, 5000);
  }

  // Initial setup
  setSlidesPosition();
});
