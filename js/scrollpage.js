$(document).ready(function (){
    $(window).scroll(function(){
        if($(window).scrollTop()){
            $('.jdev-navigation').addClass('black');
            $('.nav-mobile').addClass('adjust-mobile');
        }else{
            $('.jdev-navigation').removeClass('black');

        }
    }); 

    $("#cta-btn").click(function (){
        $('html, body').animate({
            scrollTop: $("#aboutScroll").offset().top
        }, 2000);
       
    });

    $("#home").click(function (){
            $('html, body').animate({
                scrollTop: $("#homeScroll").offset().top
            }, 2000);
           
    });
    
    $("#about").click(function (){
            $('html, body').animate({
                scrollTop: $("#aboutScroll").offset().top
            }, 2000);

            var aboutid = document.getElementById('aboutScroll');
            aboutid.style.transition = "0.5s all ease-in-out";
           
            
            
    });

    $("#service").click(function (){
            $('html, body').animate({
                scrollTop: $("#serviceScroll").offset().top
            }, 2000);

            var servicesid = document.getElementById('services-title');
            servicesid.style.display = "block";
    });

    $("#projects").click(function (){
            $('html, body').animate({
                scrollTop: $("#projectsScroll").offset().top
            }, 2000);
    });

    $("#contact").click(function (){
            $('html, body').animate({
                scrollTop: $("#contactScroll").offset().top
            }, 2000);
    });
    

    $("#topBtn").click(function (){
        $('html, body').animate({
            scrollTop: $("#homeScroll").offset().top
        }, 1000);
    });

    $('#nav-toggle').click(function() {
        $('.nav-list ul').slideToggle(500);
    });
      // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
    this.classList.toggle('active');
    });
});