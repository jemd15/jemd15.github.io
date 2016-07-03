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
    })
});