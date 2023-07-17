let hamburger = document.querySelector("#hamburger");

let nav_list = document.querySelector("#nav_list")

let nav_sect = document.querySelector("#nav_sect")



hamburger.addEventListener('click', function() {

    nav_list.classList.toggle('nav_toggle')

    hamburger.classList.toggle('icon_rotate')

    // nav_sect.style.zIndex = "100" 
  
  })

