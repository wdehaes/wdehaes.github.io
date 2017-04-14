function centralStarStart(importFunction) {
  var sky, star, topText;

  function starStart() {
    star = $('.star-start');
    new TweenLite.to(star, 2, {opacity: 1, onComplete: rotate});
  }

  function rotate() {
    var gravity = $('#gravity');
    var coreEnergy = $('#core-energy');
    var tlRotate = new TimelineMax({repeat:-1});
    tlRotate.to(gravity, 2, {rotation:180, svgOrigin:"197 187"})
            .to(gravity, 2, {rotation: 0, svgOrigin:"197 187"})
            .to(coreEnergy, 2, {rotation: 180, svgOrigin:"197 187"}, "-=4")
            .to(coreEnergy, 2, {rotation: 0, svgOrigin:"197 187"}, "-=2");
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
  var sky = $('#elem-sky');
  var explanation = $('<div class="star-explanation"></div>');
  centralStarTextChange(0, explanation);
  sky.append(explanation);
}

function centralStarSupernova() {
  var explanation = $('.star-explanation');
  var gravity = $('#gravity');
  var coreEnergy = $('#core-energy');
  TweenLite.to(gravity, 2, {opacity: 0, autoAlpha: 0});
  TweenLite.to(coreEnergy, 2, {opacity: 0, autoAlpha: 0});
  TweenLite.to(explanation, 2, {opacity:0, onComplete: function() {
    centralStarTextChange(1, explanation);
  }});
}
 
function centralStarTextChange(n, target) {
  var textArray = [
    '<p>A star’s external <span class="oker">gravity</span></p><p>and internal core <span class="oker">energy</span> put pressure on one another</p>',
    '<p>resulting in a supernova</p><p>and one of <span class="oker">two</span> endothermic processes</p>',
    '<p><span class="oker">one</span> during a massive explosion</p>'
    ];
    target.empty();
    target.append(textArray[n]);
    TweenLite.to(target, 2, {opacity: 1});

}