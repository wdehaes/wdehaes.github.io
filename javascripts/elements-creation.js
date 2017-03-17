function elementsCreation() {
  var sky = $('#elem-sky'),
      skyWidth = sky.width(),
      skyHeight = sky.height(),
      letters = $('#circle-text span').toArray().reverse(),
      he = $('.start-helium'),
      h = $('.start-hydrogen');
      tl = new TimelineLite()

  function fadeOutCircleText(argument) {
    tl
      .staggerTo(letters, 0.3, {
        opacity: 0,
        autoAlpha: 0
      }, 0.01)
      .to(he, 1, { opacity: 0, ease: Power2.easeOut, autoAlpha: 0 }, 0.2)
      .to(h, 1, { opacity: 0, ease: Power2.easeOut, autoAlpha: 0 }, 0.2)
  }

  function generateElement(elementCoord) {
    if (elementCoord.type === 'circle') {
      var element = $('<div class="elem"/>');
      $(element).css({
        width: (parseFloat(elementCoord.width) * skyWidth / 100),
        height: (parseFloat(elementCoord.width) * skyWidth / 100),
        left: (parseFloat(elementCoord.left) * skyWidth / 100),
        top: (parseFloat(elementCoord.top) * skyHeight / 100)
        // opacity: 0
      });
      var bg = $('<div class="elem-bg"/>');
      var symbol = Math.random() > 0.3 ? "H" : "He";
      var txt = $('<p class="elem-text">' + symbol + '</p>');
      $(bg).css({
        opacity: elementCoord.opacity
      });
      $(txt).css({
        "font-size": Math.round(parseFloat(elementCoord.width) * skyWidth / 275),
        "font-family": "ConcourseT6"
      });
      $(element).append(bg);
      $(element).append(txt);
      return element;
    }
  }

  function init() {
    fadeOutCircleText()
    var elements = elementsCoordinates.map(generateElement);
    elements.map(
      function(element) {
        sky.append(element);
        // tl.to(element, 1, {opacity: 1}, 0)
      });
  }

  init();
}
