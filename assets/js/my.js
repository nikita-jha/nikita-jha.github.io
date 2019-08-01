var scrollDistance = $(heading).offset().top;

$('#myProject').click(function() {
        var scrollDistance = $(".myprojectheader").next().offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);
    });