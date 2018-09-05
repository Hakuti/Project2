//below is the animation for the high score
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
  hsHead = $('#hsHead'),
  hsBox = $('#hsBox'),
  
 tl = new TimelineLite();

  tl
    .from(hsBox, 1, { x:-3000, autoAlpha: 0, ease: Bounce.easeOut })
    .from(hsHead, 1.2, { x:-250, autoAlpha: 0, ease: Elastic.easeOut.config(1, 0.3), y: -500  },'-=.1')
    .from(list1, .10, { x: -200, autoAlpha: 0, ease: Power1.easeOut }, '-=.02')
    .from(list2, .10, { x: -200, autoAlpha: 0, ease: Power1.easeOut }, '-=.02')
    .from(list3, .1, { x: -200, autoAlpha: 0, ease: Power1.easeOut }, '-=.02')
    .from(list4, .10, { x: -200, autoAlpha: 0, ease: Power1.easeOut }, '-=.02')
    .from(list5, .10, { x: -200, autoAlpha: 0, ease: Power1.easeOut }, '-=.02')
    .from(list6, .10, { x: -200, autoAlpha: 0, ease: Power1.easeOut }, '-=.02')
    .from(list7, .10, { x: -200, autoAlpha: 0, ease: Power1.easeOut }, '-=.02')
    .from(list8, .10, { x: -200, autoAlpha: 0, ease: Power1.easeOut }, '-=.02')
    .from(list9, .10, { x: -200, autoAlpha: 0, ease: Power1.easeOut }, '-=.1')
    .from(list10, .10, { x: -200, autoAlpha: 0, ease: Power1.easeOut }, '-=.02')
    

  console.log("ran ");
  //the dropdown menu starts out hidden
  $("#menu").hide();
  //on a button click the dropdown menu and start button are shown and the login/signup is hidden
  $(".switch").on("click",function(){
    $("#switch1").hide();
    $("#menu").show();   
  });
  
})(jQuery);