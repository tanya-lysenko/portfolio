$(function () {
    // Пустые ссылки
    $('a[href="#"]').click(function (e) {
        e.preventDefault();
    });

    // Масштабируемые картинки
    $(".img-scalable").each(function () {
        var box = $(this).find(".img-box"),
            k = parseInt(box.css("max-width"), 10) / parseInt(box.css("max-height"), 10)
        ;
        $(document).ready(function () {
            box.height(box.width() / k);
        });
        $(window).resize(function () {
            box.height(box.width() / k);
        });
    });

    // Модальное окно
    $('[data-fancybox="gallery"]').fancybox({
        arrows: false,
        infobar: false,
        buttons: ['close']
    });

    // Ссылка для viber
    const
        viber = $(".viber"),
        mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        command = mobile ? "add" : "chat",
        tel = mobile ? viber.data("tel") : "+" + viber.data("tel")
    ;

    viber.attr("href", "viber://" + command + "?number=" + tel)
});