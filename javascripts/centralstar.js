function centralStarStart(importFunction) {
  var sky, star, topText;

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
  console.log('test');
  var sky = $('#elem-sky');
  var explanation = $('<div class="star-explanation"></div>');
  explanation.append(centralStarTextChange(0));
  sky.append(explanation);

}

function centralStarTextChange(n) {
  var textArray = [
    '<p>A star’s external <span class="yellow">gravity</span></p><p>and internal core <span class="yellow">energy</span> put pressure on one another</p>',
    '<p>resulting in a supernova</p><p>and one of <span class="yellow">two</span> endothermic processes</p>',
    '<p><span class="yellow">one</span> during a massive explosion</p>'
    ];
  return textArray[n];
}