function oneStar(importFunction) {
  var sky = $('#elem-sky');
  var scale = 6.3;
  importFunction('protostar', sky, init);
  var star, bg, skyWidth, skyHeight, tl_one, tl_two, radius, protostarTop, protostarLeft;

  function moveElementToCenter(element) {
    var elementText = $(element).find('.elem-text');
    var elementBackground = $(element).find('.elem-bg');
    var nucleus = atomicNuclei.sort(function() { return 0.5 - Math.random()}).pop();
    var bgColor = nucleus.width > 0.04 ? "#FF0000" : "white";
    var elementWidth = nucleus.width * radius;
    var elementLeft = protostarLeft + radius * (1 + parseFloat(nucleus.xPos));
    var elementTop = protostarTop + radius * (1 + parseFloat(nucleus.yPos));
    tl_two.to(elementText, 1, { opacity: 0, autoAlpha: 0}, "elements")
          .to(elementBackground, 2, {css: {background: bgColor}}, "elements")
          .to(element, 2, {css: {width: elementWidth, height: elementWidth, top: elementTop, left: elementLeft}}, "elements");
  }

  function elementsMove() {
    tl_two = new TimelineLite({delay: 4 });
    var boundingRect = bg[0].getBoundingClientRect();
    radius = boundingRect.width/2 * scale;
    protostarTop = boundingRect.top;
    protostarLeft = boundingRect.left;
    var sourceElements = $('.elem');
    sourceElements.map(function(index, element) {
      moveElementToCenter(element);
    });
    elementsText(1);
  }

  function init() {
    star = $('.protostar');
    bg = $('#protostar-bg');
    skyWidth = sky.width();
    skyHeight = sky.height();
    tl_one = new TimelineLite({delay: 2, onComplete: elementsMove()});
    var protoText = $('#protostar-text');
    tl_one.to(protoText, 1, { opacity: 0, autoAlpha: 0}, 'disappear');
    var h = $('#protostar-h');
    tl_one.to(h, 1, { opacity: 0, autoAlpha: 0}, 'disappear');
    tl_one.to(star, 3, {opacity: 1, scale: scale});
    tl_one.to(bg, 2, {background: '#CB5822', opacity: 1}, "-=2");
  }
}

