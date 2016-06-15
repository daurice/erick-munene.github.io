$(document).foundation() 

$(document).ready(function(){
    $(".button-nav a").click(function(){
        $(".overlay").fadeToggle(200);
       $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
});
$('.overlay').on('click', function(){
//    $(".overlay").fadeToggle(200);   
    $(".button-nav a").toggleClass('btn-open').toggleClass('btn-close');
    open = false;
});