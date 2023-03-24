const sliders = $(".slider__slides");
const dots = $(".dots__dot");
let count = 0

function setActive(i) {
    for (slider__slides of sliders)
    slider__slides.classList.remove("active");
    sliders[i].classList.add("active");
    for (dots__dot of dots)
    dots__dot.classList.remove("active");
    dots[i].classList.add("active")
}

for (let j = 0; j < dots.length; j++) {
    dots[j].addEventListener("click", function(){
        setActive(j)
    })

}

/* Automatic Slider */
setInterval(function() {
    
    setActive(count)
    count++

    if (count > 2) {
        count = 0
    }
     
}, 4000);


/* Navigation bar Toggle */

const toggle = $(".nav__toggle");
const navbar = $(".header__navbar");
    toggle.click(function () {
       $(this).toggleClass("active");
       navbar.toggleClass("active");
    })

