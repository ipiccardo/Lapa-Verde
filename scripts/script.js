/* NAV MENU */

/* NAV MENU */

const toggleMenu = document.querySelector('.toggle-menu')

addEventListener('DOMContentLoaded', () => {
  const toggleMenu = document.querySelector('.toggle-menu')
  const mainMenu = document.querySelector('.main-menu')
  if (toggleMenu) {
    toggleMenu.addEventListener('click', () => {
      const closeMenub = document.querySelector('.closeMenub')
      const openMenu = document.querySelector('.toggle-menu__icon')
      const nav = document.querySelector('.nav')
      mainMenu.classList.toggle('show')
      nav.classList.toggle('green');
      openMenu.classList.toggle('openMenu')
      if ($('.toggle-menu__iconB').hasClass('closeMenub')){
        ($('.toggle-menu__iconB').removeClass('closeMenub'))
      }else {
         ($('.toggle-menu__iconB').addClass('closeMenub'))
      }
    })
  }

  /* cerrar mainMenu cuando se clickea en un link (mobile) */ 
  let menuLinks = document.querySelectorAll('.main-menu__link')
  menuLinks.forEach(function(link) {
    link.addEventListener("click", function() {
      if(mainMenu.classList.contains('show')){
        mainMenu.classList.remove('show');
      }
    });
  });

})

  /* EVENTOS AL SCROLLEAR */

var checkScroll = function(){
    if ($(window).scrollTop() > 49){
      $('.nav').addClass('black'); 
    }else{
      $('.nav').removeClass('black');
    }
  };
  checkScroll();
  $(window).scroll(function(){
    checkScroll();
  });


/* CLOSE NAV MENU */
 


  $(document).ready(function() {

  /* GALERY       */

  const galery = document.querySelector('.galery')
  const closeButtom = document.querySelector('.closeButtom')
  const next = document.querySelector('.next')
  const previus = document.querySelector('.previus')
  const images = document.querySelectorAll('.galery img')
  const containerGalery = document.querySelector('.containerGalery')
  const activeImage = document.querySelector('.img-active')
  let array = []
  let indexImage = 0;


  /*ABRIR CONTENEDOR PRINCIPAL */

  const openGalery = (event) => {
    activeImage.src = event.target.src;
    containerGalery.style.display = 'flex';
    $('.galery').addClass('hideGalery');
    $('.completedGalery').addClass('hideGalery')
    $('.completedGalery').addClass('displayNone')
    $('.contanierCompletedGalery').addClass('positionNone')
    indexImage = array.from(images).indexOf(event.target);
  }

  images.forEach((image) => {
    image.addEventListener('click', openGalery)
  })


/*CERRAR CONTENEDOR PRINCIPAL */

closeButtom.addEventListener('click', () => {
  containerGalery.style.display = 'none';
  $('.galery').removeClass('hideGalery')
  $('.completedGalery').removeClass('hideGalery')
  $('.completedGalery').removeClass('displayNone')
  $('.contanierCompletedGalery').addClass('positionNone')
})

/*ADELANTA LA IMAGEN */

const nextImage = () => {
  if(indexImage === images.length -1){
    indexImage = -1
  }
  activeImage.src = images[indexImage + 1].src
  indexImage++
}

next.addEventListener('click', nextImage);


/*RETROCEDE LA IMAGEN */

const previusImage = () => {
  if(indexImage === 0) {
    indexImage = images.length;
  }
  activeImage.src = images[indexImage - 1].src 
  indexImage --
}

previus.addEventListener('click', previusImage);


/* FORM */

const btnClear = document.querySelector('.formButton')
const inputs = document.querySelectorAll('input')
const textArea = document.querySelector('textarea')


btnClear.addEventListener('click', () => {
  inputs.forEach(input => input.value = '')
  textArea.value = ''
})





})
  