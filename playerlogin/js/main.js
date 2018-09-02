(function ($) {
  var mainBox = $('#infoBox'),
   subBox = $('#subBox'),
   infoHead= $('#infoHead')
   loginForm = $('#loginForm')
 tl = new TimelineLite();

  tl
    .from(mainBox, 1.75, { y: -100, autoAlpha: 0, ease: Bounce.easeOut })
    .from(subBox,  1, { y: -100, autoAlpha: 0, ease: Bounce.easeOut }, '-=.1')
    .from(infoHead,  .75, { y: -100, autoAlpha: 0, ease: Bounce.easeOut }, '-=.1')
    .from(loginForm, .60, { y: -100, autoAlpha: 0, ease: Bounce.easeOut }, '-=.1')
    
  

  console.log("ran ")
})(jQuery);