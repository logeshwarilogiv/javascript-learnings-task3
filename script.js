const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabcursor: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
       el: '.swiper-pagination',
       clickables: true,
       dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0:{
            slidesperview: 1
        },
        620:{
            slidesperview: 2
        },
        1024:{
            slidesperview: 3
        },
    }
  
  });
