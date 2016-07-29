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
        $("#card-formulario").removeClass("bounceInRight");
        $("#card-formulario").addClass("bounceOutRight");
        $("#card-formulario").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass("bounceOutRight");
            $('#contactForm')[0].reset();
            $(this).addClass("bounceInRight");
        });
    });
    $("#card-image-1").mouseenter(function () {
       $("#span-card-image-1").removeClass("hide");
       $("#span-card-image-1").removeClass("bounceOutDown");
       $("#span-card-image-1").addClass("bounceInUp");
        $("#span-card-image-1").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass("hide");
        });
    });
    $("#card-image-1").mouseout(function () {
       $("#span-card-image-1").removeClass("bounceInUp");
       $("#span-card-image-1").addClass("bounceOutDown");
       $("#span-card-image-1").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
           $(this).addClass("hide");
           $(this).removeClass("bounceOutDown");
       });
    });
    $("#card-image-2").mouseenter(function () {
       $("#span-card-image-2").removeClass("hide");
       $("#span-card-image-2").removeClass("bounceOutDown");
       $("#span-card-image-2").addClass("bounceInUp");
        $("#span-card-image-2").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass("hide");
        });
    });
    $("#card-image-2").mouseout(function () {
       $("#span-card-image-2").removeClass("bounceInUp");
       $("#span-card-image-2").addClass("bounceOutDown");
       $("#span-card-image-2").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
           $(this).addClass("hide");
           $(this).removeClass("bounceOutDown");
       });
    });
    $("#card-image-3").mouseenter(function () {
       $("#span-card-image-3").removeClass("hide");
       $("#span-card-image-3").removeClass("bounceOutDown");
       $("#span-card-image-3").addClass("bounceInUp");
        $("#span-card-image-3").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass("hide");
        });
    });
    $("#card-image-3").mouseout(function () {
       $("#span-card-image-3").removeClass("bounceInUp");
       $("#span-card-image-3").addClass("bounceOutDown");
       $("#span-card-image-3").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
           $(this).addClass("hide");
           $(this).removeClass("bounceOutDown");
       });
    });
    $("#card-image-1").onclick(function () {

    });
});