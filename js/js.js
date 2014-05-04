$(document).ready(function() {

    paypal.minicart.render();

    $('#intro-page').delay(1000).fadeOut(400);
    $( ".guide" ).draggable({ axis: 'x' });

    $(".info").click(function () {
        $(".logo").addClass( "active" );
        $(".drawer").show();
        $(".drawer").animate({
            top: "0px",
            display: "block"
        }, 200);

        $(".exit").click(function () {
            $(".logo").removeClass( "active" );
            $(".drawer").animate({
                top: "-536px",
                display: "block"
            }, 200);
        });
    });

    // $(".drawer").click(function () {
    //     $(this).slideToggle("fast");
    // });

    $(".pub-a, .intro-a").hover(function() {
            link_id = $(this).attr('id');
            $("html").addClass("bgfade" + link_id);
            $("#" + link_id + "-img").show();
        },
        function() {
            $("html").removeClass("bgfade" + link_id);
            $("#" + link_id + "-img").hide();
        });

    //enter bookdetail
    $('.pub-a').click(function(e) {
        link_id = $(this).attr('id');
        e.preventDefault();

        //fadein bookdetail
        $('#' + link_id + '-gallery').fadeIn({
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '0',
            right: '0',
        }, 0).addClass("bg" + link_id);

        //start slideshow
        $('#' + link_id + '-gallery .box').append('<img src="./img/' + link_id + '/1.jpg"><img src="./img/' + link_id + '/2.jpg"><img src="./img/' + link_id + '/3.jpg">');
        
        //<img src="./img/' + link_id + '/4.jpg"><img src="./img/' + link_id + '/5.jpg"><img src="./img/' + link_id + '/6.jpg"><img src="./img/' + link_id + '/7.jpg"><img src="./img/' + link_id + '/8.jpg">

        //next slide
        $('.box img').click(function() {
            nextSlide($(this).parents('#' + link_id + '-gallery').find('.box'));
        });

        //exit bookdetail & empty
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

        //initialize slideshow
        initBookdetail();

        function initBookdetail() {
            //show first image
            $('#' + link_id + '-gallery').each(function() {
                $(this).find('img:first').show(0).addClass("active");
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