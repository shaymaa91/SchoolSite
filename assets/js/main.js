


var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },            
        960:{
            items:3
        },
        1200:{
            items:3
        }
    }
});

owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
        499: {
            slidesPerView: 1,
            spaceBetweenSlides: 20
        },
        640: {
            slidesPerView: 3,
            spaceBetweenSlides: 20
        },
        768: {
            slidesPerView: 3,
            spaceBetweenSlides: 20
        },
        999: {
            slidesPerView: 3,
            spaceBetweenSlides: 20
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        }}
  });

