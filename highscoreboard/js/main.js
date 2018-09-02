(function ($) {
    var list1 = $('#hs1'),
     list2 = $('#hs2'),
     list3 = $('#hs3'),
    list4 = $('#hs4'),
    list5 = $('#hs5'),
    list6 = $('#hs6'),
    list7 = $('#hs7'),
    list8 = $('#hs8'),
    list9 = $('#hs9'),
    list10 = $('#hs10'),
    hsHead = $('#hsHead')
    hsBox = $('#hsBox')
   tl = new TimelineLite();
  
    tl
      .from(hsBox, 1.2, { x:-3000, autoAlpha: 0, ease: Bounce.easeOut })
      .from(hsHead, 1.50, { x:-250, autoAlpha: 0, ease: Elastic.easeOut.config(1, 0.3), y: -500  },'-=.1')
      .from(list1, .80, { x: -200, autoAlpha: 0, ease: Power1.easeOut }, '-=.1')
      .from(list2, .70, { x: -200, autoAlpha: 0, ease: Power1.easeOut }, '-=.1')
      .from(list3, .60, { x: -200, autoAlpha: 0, ease: Power1.easeOut }, '-=.1')
      .from(list4, .60, { x: -200, autoAlpha: 0, ease: Power1.easeOut }, '-=.1')
      .from(list5, .60, { x: -200, autoAlpha: 0, ease: Power1.easeOut }, '-=.1')
      .from(list6, .60, { x: -200, autoAlpha: 0, ease: Power1.easeOut }, '-=.1')
      .from(list7, .60, { x: -200, autoAlpha: 0, ease: Power1.easeOut }, '-=.1')
      .from(list8, .60, { x: -200, autoAlpha: 0, ease: Power1.easeOut }, '-=.1')
      .from(list9, .60, { x: -200, autoAlpha: 0, ease: Power1.easeOut }, '-=.1')
      .from(list10, .60, { x: -200, autoAlpha: 0, ease: Power1.easeOut }, '-=.1');

    
  
    console.log("ran ")
  })(jQuery);