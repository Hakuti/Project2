(function ($) {
    var button1 = $('#btn1'),
     button2 = $('#btn2'),
     button3 = $('#btn3')
     button4 = $('#btn4')
   tl = new TimelineLite();
  
    tl
      .from(button1, .05, { y: +100, autoAlpha: 0, ease: Bounce.easeOut })
      .from(button2,  .05, { y: -100, autoAlpha: 0, ease: Bounce.easeOut }, '+=.04')
      .from(button3,  .05, { y: +100, autoAlpha: 0, ease: Bounce.easeOut }, '+=.04')
      .from(button4, .05, { y: -100, autoAlpha: 0, ease: Bounce.easeOut }, '+=.04')
      
    
  
    console.log("ran ")
  })(jQuery);