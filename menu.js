$(document).ready(function () {
    var currentPageHeight = $('.main-img-page').height();

    $(document).scroll(function ($event) {
        if ($(document).scrollTop() > (currentPageHeight - 50)) {
            $('header').removeClass('menu-background-when-no-scrolled');
            $('header').addClass('menu-background-when-scrolled');
        } else {
            $('header').removeClass('menu-background-when-scrolled');
            $('header').addClass('menu-background-when-no-scrolled');
        }
    })
})