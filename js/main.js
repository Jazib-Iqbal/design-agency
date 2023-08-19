let hamburger = document.querySelector("#hamburger");

let nav_list = document.querySelector("#nav_list")

let nav_sect = document.querySelector("#nav_sect")

let body = document.querySelector("#body")





hamburger.addEventListener('click', function () {

  nav_list.classList.toggle('nav_toggle')

  hamburger.classList.toggle('icon_rotate')


  body.style.overflowY = hidden;

  // nav_sect.style.zIndex = "100" 

})


var ball = document.querySelector('.ball');

var tl = new TimelineMax({
  repeat: -1,
  yoyo: true
});
tl.add('start')
  .to(ball, 3, {
    y: 10,
    // ease: ease
  })
  


gsap.to(".circle_sm", {
  // opacity: 1,  
    x: 0,
    // display: block,
    stagger:{
        
        // opacity: 1,  
        // each: .1,
        amount: 1,
        // from: "center",
    },

    // scrollTrigger: {
    //     trigger: ".logo",
    //     start: "top top",
    //     // scrub: .2,
    //     // x: 700,
        
    // }

})


gsap.to(".scroll_heading", {
  duration: .5,
  
  // width: "100%",
  x: -1400,
  scrollTrigger: {
      trigger: ".company_slogan",
      start: "top 80%",
      scrub: .5,
      // x: -700,
      
  }
})


var slider1 = new Swiper ('.slider1', {
  effect: 'slide',
  
  pagination: {
    el: '.swiper-pagination',
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
