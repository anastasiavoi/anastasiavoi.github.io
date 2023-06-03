
let toLeft = document.querySelector('.arrow-left');
let toRight = document.querySelector('.arrow-right');
let slider = document.querySelector('.item-wrap');


// let sliderItem = document.querySelectorAll('.slider-item')


toLeft.addEventListener('click', function () {
    if (slider.scrollLeft <= 0) {
        slider.scrollLeft += slider.scrollWidth;
    }
    else {
        slider.scrollLeft -= 400;
    }

})



toRight.addEventListener('click', function () {
    let maxScrollRight = slider.scrollWidth - slider.clientWidth;
    if (slider.scrollLeft >= maxScrollRight - 1) {
        slider.scrollLeft -= slider.scrollWidth;
    }
    else {
        slider.scrollLeft += 400;
    }
})


ScrollReveal().reveal('.top',{reset: true, origin: 'top',  delay: 700 ,  distance: '50px' });
      ScrollReveal().reveal('.bottom',{reset: true, origin: 'bottom',  delay: 300,  distance: '100px' });
      ScrollReveal().reveal('.left',{ reset: true, delay: 700 , origin: 'left',  distance: '150px'});
      ScrollReveal().reveal('.right', {reset: true, duration: 500, interval: 500 , origin: 'right',  distance: '50px'});

