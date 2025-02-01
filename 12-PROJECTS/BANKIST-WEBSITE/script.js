'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// FUNCTION TO OPEN A MODAL WINDOW
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// FUNCTION TO CLOSE A MODAL WINDOW
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// LISTENS FOR CLICK TO OPEN THE MODAL
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

// EVENT LISTENER TO CLOSE MODAL
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


document.addEventListener('keydown', function (e) {
  // CHECKING THAT USER TYPED THE ESCAPE
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
  

///////////////////////////////////////
// Text Animation

const allSections = querySelectorAll('.section');

const revealSection = function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  });
};

// SETTINGS FOR THE OBSERVER
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  // DISPLAY ANIMATED CONTENT BY SUPPLYING OBSERVER SETTINGS
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});


///////////////////////////////////////
// Slider

const slider = function () {
  // CAPTURE THE GENERAL SLIDE
  const slides = document.querySelectorAll('.slide');
  // CAPTURE LEFT ARROW
  const btnLeft = document.querySelector('.slider__btn--left');
  // CAPTURE THE RIGHT ARROW
  const btnRight = document.querySelector('.slider__btn--right');
  // CAPTURE THE DOTS
  const dotContainer = document.querySelector('.dots');

  // VARIABLE TO TRACK CURRENT SLIDE
  let curSlide = 0;

  //STORING THE LENGTH OF THE ARRAY
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  //FUNCTION TO ACTIVATE THE DOT
  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  // MOVE TO THE SLIDE THAT IS CLICKED BY THE USER
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // MOVING TO THE NEXT SLIDE OF THE CURRENT SLIDE
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    // CALL METHOD TO MOVE TO CLICKED SLIDE
    goToSlide(curSlide);

    // CALL METHOD TO MOVE TO CLICKED SLIDE
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      // BUG in v2: This way, we're not keeping track of the current slide when clicking on a slide
      // const { slide } = e.target.dataset;

      curSlide = Number(e.target.dataset.slide);
      goToSlide(curSlide);
      activateDot(curSlide);
    }
  });
};

// CALL SLIDER FUNCTION
slider();

// END OF SLIDER
/////////////////////////////////////////////


