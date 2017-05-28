$(document).ready(function(){
var hero = $('.hero');

var backgrounds = new Array(
    'url(assets/backgroundimage0.jpg)'
  , 'url(assets/backgroundimage1.jpg)'
  , 'url(assets/backgroundimage2.jpg)'
  , 'url(assets/backgroundimage3.jpg)'
);

var current = 0;

function nextBackground() {
    current++;
    current = current % backgrounds.length;
    hero.css('backgroundImage', backgrounds[current]);
}
setInterval(nextBackground, 6000);

// hero.css('background-image', backgrounds[0]);
});
