let hamburger = document.querySelector("#hamburger");

let nav_list = document.querySelector("#nav_list")

let nav_sect = document.querySelector("#nav_sect")



hamburger.addEventListener('click', function () {

  nav_list.classList.toggle('nav_toggle')

  hamburger.classList.toggle('icon_rotate')

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
  


  gsap.to(".g_inner", {
    x: -300,
    // display: block,
    stagger:{
        each: .1,
        visibility: visible,
        
        from: "center",
    },

    scrollTrigger: {
        trigger: ".logo",
        start: "top top",
        // scrub: .2,
        // x: 700,
        
    }

})
  