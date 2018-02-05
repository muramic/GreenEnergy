$(document).ready(() => {
    console.log('document is ready!')

    function timer() {
        setTimeout(() => {
            $('[data-slider-button-type="next"]').click();
            timer();
        }, 10000);
    }

    function showSlide(index) {
        $('[data-slider-number]').hide();
        $('[data-slider-number=' + index + ']').show();
    }

    $('[data-slider-button-type="next"]').click(() => {
        let slides = $('[data-slider-number]');
        let currentSlide = $('[data-slider-number]:visible').attr('data-slider-number');

        if ($(slides[slides.length - 1]).attr('data-slider-number') !== currentSlide) {
            currentSlide++;
        } else {
            currentSlide = 1;
        }

        showSlide(currentSlide);
    })

    $('[data-slider-button-type="prev"]').click(() => {
        let slides = $('[data-slider-number]');
        let currentSlide = $('[data-slider-number]:visible').attr('data-slider-number');

        if ($(slides[0]).attr('data-slider-number') !== currentSlide) {
            currentSlide--;
        } else {
            currentSlide = $(slides[slides.length - 1]).attr('data-slider-number');
        }

        showSlide(currentSlide);
    })

    timer();
})