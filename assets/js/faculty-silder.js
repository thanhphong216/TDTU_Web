$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayHoverPause: true,
    autoplayTimeout:2000,
    nav:false,
    dots:true,
    items:4,
    responsive:{
        0:{
            items:1
        },
        720:{
            items:2
        },
        960:{
            items:4
        }
    }
})