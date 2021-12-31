var carouselOwl = $(".hero-inner-right .owl-carousel");

carouselOwl.owlCarousel( {
    loop:true,
    margin:10,
    slideSpeed: 300,
    paginationSpeed: 400,
    autoplay: true,
    autoplayTimeout:3000,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    responsive: {
        0: {
            items:1,
        }
    }
    
});


$(".fix-left-info").hide(300);
$(".fix-left-info-btn").click( function () {
    $(".fix-left-info").show(300);
});
$(".fix-left-info span").click(function () {
    $(".fix-left-info").hide(300);
});


if(document.querySelector(".mobile-open")){
    document.querySelector(".mobile-open").addEventListener("click", function (e) {
    document.querySelector(".mobile-menu").classList.add("active")
  });
}

if(document.querySelector(".mobile-close")){
    document.querySelector(".mobile-close").addEventListener("click", function (e) {
    document.querySelector(".mobile-menu").classList.remove("active")
  });
}



