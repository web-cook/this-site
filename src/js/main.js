$(document).ready(function () {
  //mobile-menu
  const iconMenu = document.querySelector('.menu__icon');
  const menuBody = document.querySelector('.menu__body');

  let menuIsOpen = false;

  function toggleMenu() {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
    menuIsOpen = !menuIsOpen;
  }

  if (iconMenu) {
      iconMenu.addEventListener("click", function (e) {
        e.preventDefault();
        toggleMenu();
      });
  }

  //accordions
  const accordions = document.querySelectorAll('.accordion .accordion__item');

  accordions.forEach(el => {
    el.addEventListener('click', function (e) {
      let target = e.currentTarget;
      target.classList.toggle('accordion__item--active');
    })
  })

  //account
  const account = document.querySelector('.link-account'),
        modal = document.querySelector('.modal'),
        modalClose = document.querySelector('.modal__close');

  account.addEventListener('click', function(e) {
    e.preventDefault();
    modal.classList.add('modal--active');
    if (iconMenu.classList.contains('_active')) {
      toggleMenu();
    }
  })

  modalClose.addEventListener('click', function(e) {
    modal.classList.remove('modal--active');
  })

  //modal-info
  const infoModalBtn = document.querySelector('.info__img'),
        infoModal = document.querySelector('.info-modal');

  const main = document.querySelector('.main');
        
  infoModalBtn.addEventListener('click', function() {
    infoModal.classList.toggle('info-modal--active');
  })

  main.addEventListener('click', function(e) {
    let target = e.target;
    if(target != infoModal && infoModal.classList.contains('info-modal--active')) {
      infoModal.classList.toggle('info-modal--active');
    }
  })
});