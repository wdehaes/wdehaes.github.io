$(document).ready(function() {
  var intro = $('.intro');
  var topFirst = $('.start-top__first');
  var topSecond = $('.start-top__second');
  var bottom = $('.start-bottom');
  var he = $('.start-helium');
  var h = $('.start-hydrogen');
  var explanation = '<div class="star-explanation"></div>';
  var textArray = [
    '<p>A star’s external <span class="yellow">gravity</span></p><p>and internal core <span class="yellow">energy</span> put pressure on one another</p>',
    '<p>resulting in a supernova</p><p>and one of <span class="yellow">two</span> endothermic processes</p>',
    '<p><span class="yellow">one</span> during a massive explosion</p>'
    ];

  introOpening();

  var indicator = new WheelIndicator({
    elem: document.querySelector('body'),
    callback: function(e){
      if (animation < animationFunctions.length) {
        var currentFunction = animationFunctions[animation];
        currentFunction.func(currentFunction.argument);
        animation+=1;
      }
    }
  });

  //The method call
  indicator.getOption('preventMouse'); // true
  var animation = 0;

  var animationFunctions = [
    // { func: introToStart},
    // { func: startToCircleText},
    // { func: elementsCreation},
    // { func: protostar},
    // { func: starryNight},
    { func: centralStarStart, argument: importSVG }
  ];


  var circleText = $('#circle-text');
  circleText.circleType({radius: 220, dir:-1});
  for (var i = 22; i <= 43; i++) {
    $('#circle-text .char' + i).addClass('yellow');
  }
  var protoText = $('#proto-text');
  protoText.circleType({radius: 70, dir:-1});
});

function randomInt(max, min = 0) {
  return Math.floor(random(max, min));
}

function random(max, min = 0) {
  return Math.random() * (max - min) + min;
}

function importSVG(svgName, target, callback) {
  $.get('/img/' + svgName + '.svg', function(data) {
    target.append($(data).contents());
    callback();
  });
}
