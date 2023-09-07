$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    //console.log(scroll);
    if (scroll > 200) {
        //console.log('a');
        $('.muthoCar-tab-wrap').addClass('sticky-header');
    } else {
        //console.log('a');
        $('.muthoCar-tab-wrap').removeClass('sticky-header');
    }
});
