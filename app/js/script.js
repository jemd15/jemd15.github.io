$(document).ready(function() {
    $("#sobre-mi").on("click",function () {
        $(this).addClass("active");
        $("#tab-sobre-mi").removeClass("hide");
        $("#tab-curriculum").addClass("hide");
        $("#tab-contacto").addClass("hide");
        $("#curriculum").removeClass("active");
        $("#contacto").removeClass("active");
    });
    $("#curriculum").on("click",function () {
        $(this).addClass("active");
        $("#tab-curriculum").removeClass("hide");
        $("#tab-sobre-mi").addClass("hide");
        $("#tab-contacto").addClass("hide");
        $("#sobre-mi").removeClass("active");
        $("#contacto").removeClass("active");
    });
    $("#contacto").on("click",function () {
        $(this).addClass("active");
        $("#tab-contacto").removeClass("hide");
        $("#tab-curriculum").addClass("hide");
        $("#tab-sobre-mi").addClass("hide");
        $("#curriculum").removeClass("active");
        $("#sobre-mi").removeClass("active");
    });
    $("img.circle.responsive-img.animated").mouseenter(function () {
        $(this).addClass("tada");
        $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass("tada");
        });
    });
    $("a#send").on("click", function () {
        $("#card-formulario")
            .removeClass("bounceInRight")
            .addClass("bounceOutRight")
            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass("bounceOutRight");
            $('#contactForm')[0].reset();
            $(this).addClass("bounceInRight");
        });
    });
    $("#card-image-1").hover(function () {
       $("#span-card-image-1")
           .removeClass("hide")
           .removeClass("bounceOutDown")
           .addClass("bounceInUp")
           .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this)
                .removeClass("hide");
        });
    },
    function () {
       $("#span-card-image-1")
           .removeClass("bounceInUp")
           .addClass("bounceOutDown")
           .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
           $(this)
               .addClass("hide")
               .removeClass("bounceOutDown");
       });
    });
    $("#card-image-2").hover(function () {
       $("#span-card-image-2")
           .removeClass("hide")
           .removeClass("bounceOutDown")
           .addClass("bounceInUp")
           .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this)
                .removeClass("hide");
        });
    },
    function () {
       $("#span-card-image-2")
           .removeClass("bounceInUp")
           .addClass("bounceOutDown")
           .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
           $(this)
               .addClass("hide")
               .removeClass("bounceOutDown");
       });
    });
    $("#card-image-3").hover(function () {
       $("#span-card-image-3")
           .removeClass("hide")
           .removeClass("bounceOutDown")
           .addClass("bounceInUp")
           .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this)
                .removeClass("hide");
        });
    },
    function () {
       $("#span-card-image-3")
           .removeClass("bounceInUp")
           .addClass("bounceOutDown")
           .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
           $(this)
               .addClass("hide")
               .removeClass("bounceOutDown");
       });
    });

    //efecto al pasar el mouse encima por conocimientos
    var animacion = "flash";
    $("button").hover(function () {
        $(this)
            .addClass("animated")
            .addClass(animacion)
    },function () {
        $("button")
            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                $(this)
                    .removeClass(animacion);
            });
    });

    /*timeline vertical*/
    
});