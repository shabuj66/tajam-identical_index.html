$(document).ready(function(){

  // slider 111

  $('.banner-slider').slick({       
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,       
      dots: true,
      autoplay:true,

      
    });

  //   venobox-slider  
      $('.venobox').venobox({
        framewidth : '500px', 
        frameheight: '300px',                            
        border     : '10px',                             
        bgcolor    : '#3faccd',                          
        titleattr  : 'data-title',                      
        numeratio  : true,                               
        infinigall : true,                              
        share      : ['facebook', 'twitter', 'linkedin']                          
 
        
      }); 

  // team-slide

  $('.team-slide').slick({       
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false,       
    dots: false,
    autoplay:true,

    responsive: [         
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  // testemonial slider
   $('.tes-text-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,      
    asNavFor: '.tes-img-slide'
   });


   $('.tes-img-slide').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows:true,
    asNavFor: '.tes-text-slide',
    dots: false,
    centerMode: true,
    prevArrow:'.a-left',
    nextArrow:'.a-right',
    centerPadding: '0',
    focusOnSelect: true,
    responsive: [         
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
    
    
    
    
   });
  //  scrollTop
  $(window).scroll( function(){

    var scrolling =$(this).scrollTop();
    var sticky=$('.stickyTop');

    if(scrolling >=300){
      sticky.addClass('nav-bg');
    }else{
      sticky.removeClass('nav-bg');
    }
  })

  // Scroll To Top icon

  $(".scrolltotop").click(function(){
    $("html").animate({'scrollTop' : '0'}), 500;
    return false;
  });

  $(window).scroll( function(){
    var utd= $(window).scrollTop();

    if( utd>400){ $(".scrolltotop").show();
  }else{$(".scrolltotop").hide();}

  })

  

  
});