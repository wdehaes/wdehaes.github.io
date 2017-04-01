function centralStarStart(importFunction) {
  var sky, star;

  function starStart() {
    star = $('.star-start');
    new TweenLite.to(star, 2, {opacity: 1, onComplete: rotate});
  }

  function rotate() {
    var starText = $('.star-text');
    var tlRotate = new TimelineMax({repeat:-1});
    tlRotate.to(starText, 2, {rotation:180, svgOrigin:"197 187"})
            .to(starText, 2, {rotation: 0, svgOrigin:"197 187"});
  }

  function emptyCanvas() {
    sky.empty();
    sky.css({
      background: 'white'
    });
  }

  function init() {
    sky = $('#elem-sky');
    emptyCanvas();
    importFunction('star-start', sky, starStart);
  }

  init();
}

function centralStarInitiate() {
  sky.append(explanation);
}

function centralStarTextChange(n) {
  return textArray(n);
}