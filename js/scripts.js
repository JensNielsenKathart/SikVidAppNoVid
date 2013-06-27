$(document).ready(function(){

    if (navigator.userAgent.toLowerCase().indexOf('android') != -1) {
        $('html').addClass('android');
    }

    $(".btnInfo").click(function() {
        $('.btnInfo, #info').toggleClass("active");
    });

    $(".btnNav").click(function() {
        $('.btnNav, #menu, nav').toggleClass("active");
    });


    /** Navigation **/
    function scrollToAnchor(aid){
        var aTag = $("a[name='"+ aid +"']");
        $('html,body').animate({scrollTop: aTag.offset().top},'fast');
    }

    $("a.menuItem").click(function() {
        /*scrollToAnchor('anchorVentilator');*/
        $('.btnNav, #menu, nav').toggleClass("active");
    });

    $('video').on('click', function (e) {
        if (this.paused) {
            this.play();
        }
        else {
            this.pause();
        }
        e.preventDefault();
    });

});

$(window).on('load scroll resize' ,function () {
    $(".items header").each(function () {
        if($(this).inSight(-50)) {
            $(this).addClass('dim');
        }
        else $(this).removeClass('dim');
    });
});


$(function() {
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();

        var navHeight = $('nav').outerHeight(true);
        var element = $($(this).attr('href'));

        $('body').scrollTop(element.offset().top - navHeight);
    });
});
