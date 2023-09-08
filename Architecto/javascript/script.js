$(function() {
    // при нажатии на кнопку scrollup
    $('.scrollup').click(function() {
        // переместиться в верхнюю часть страницы
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    })
})
// при прокрутке окна (window)
$(window).scroll(function() {
    // если пользователь прокрутил страницу более чем на 200px
    if ($(this).scrollTop() > 200) {
        // то сделать кнопку scrollup видимой
        $('.scrollup').fadeIn();
    }
    // иначе скрыть кнопку scrollup
    else {
        $('.scrollup').fadeOut();
    }
});


function adjust_textarea(h) {
    h.style.height = "20px"; // при скролле высоты увеличивается размер окна
    h.style.height = (h.scrollHeight) + "px";
}



$(document).ready(function() {
    $("#menu").on("click", "a", function(event) { // проверяет нажатия в теге а и вычисляет расстояние от края окна до элемента, вычитает высоту шапки и плавно прокручивает, в течении 1,5 сек, до этого элемента
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 86;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });
});



$('#myCarousel').on('slide.bs.carousel', function() { // работы слайдера (карусели) в режиме цикл (циклическая смена слайдов по кругу)
    carousel('cycle')
})

var nice = false; // требуется для работы кастомного плавного скролла на странице
$(function() {
    nice = $("body").niceScroll();
});
