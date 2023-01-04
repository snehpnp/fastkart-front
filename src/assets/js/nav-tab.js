$('.user-nav-pills .nav-item .nav-link').on('click', function () {
    setTimeout(
        function () {
            $("html, body").animate({
                scrollTop: 0
            }, 250);
            return false;
        }, 10);
});