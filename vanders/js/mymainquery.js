
 // mixitup section (portfolio) start 
        var config =document.querySelector('.mymixtup');
        var mixer = mixitup(config);
 // mixitup section End  


 // scroll for navbar
             $('#mynavbar a ').click(function() {
            var hash = this.hash;
            var position = $(hash).offset().top;
            $("html,body").animate({
                  scrollTop: position

            }, 1000);
        });
 // scroll for snavbar  End 


 // swiper section (client)start
    var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,   /* ai gula kon beshi korle effict poribortaon hobe ( rotate=50 cholo )*/  
        stretch: 0,
        depth: 500,  /* ai gula kon beshi korle effict poribortaon hobe  (depth=100 chilo) */
        modifier: 1,   /* ai gula kon beshi korle effict poribortaon hobe */
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
 // swiper section End 


 // counter section start
$('.counter').counterUp({
    delay: 10,
    time: 1000
   });   
 // counter section End