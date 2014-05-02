$(document).ready(function() {

    paypal.minicart.render();


    $('#intro-page').delay(1000).fadeOut(400);

    $(".info").click(function () {
        $(this).toggleClass( "active" );
        $(".drawer").slideToggle("fast");
    });

    $(".pub-a, .intro-a").hover(function() {
            link_id = $(this).attr('id');
            $("html").addClass("bgfade" + link_id);
            $("#" + link_id + "-img").show();
        },
        function() {
            $("html").removeClass("bgfade" + link_id);
            $("#" + link_id + "-img").hide();
        });

    $('.pub-a').click(function(e) {
        link_id = $(this).attr('id');
        e.preventDefault();

        $('#' + link_id + '-gallery').fadeIn({
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '0',
            right: '0',
        }, 0).addClass("bg" + link_id);

        $('#' + link_id + '-gallery .box').append('<img src="./img/' + link_id + '/1.jpg"><img src="./img/' + link_id + '/2.jpg"><img src="./img/' + link_id + '/3.jpg"><img src="./img/' + link_id + '/4.jpg"><img src="./img/' + link_id + '/5.jpg"><img src="./img/' + link_id + '/6.jpg"><img src="./img/' + link_id + '/7.jpg"><img src="./img/' + link_id + '/8.jpg">');

        $('.exit').click(function(e) {

            $('#' + link_id + '-gallery').fadeOut({
                position: 'absolute',
                width: '0%',
                height: '0%',
                top: '0',
                right: '0',
            }, 0);

            $('#' + link_id + '-gallery .box').empty();
            e.preventDefault();
        });

        //initialize show
        iniShow();

        function iniShow() {
            //show first image
            $('#' + link_id + '-gallery').each(function() {
                $(this).find('img:first').show(0);
            })
        }

        function prevSlide($slides) {
            $slides.find('img:last').prependTo($slides);
            showSlide($slides);
        }

        function nextSlide($slides) {
            $slides.find('img:first').appendTo($slides);
            showSlide($slides);
        }

        function showSlide($slides) {
            //hide (reset) all slides
            $slides.find('img').hide();
            //fade in next slide
            $slides.find('img:first').show(0);
        }



    });

});