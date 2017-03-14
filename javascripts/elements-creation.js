function elementsCreation() {
  var sky = $('#elem-sky'),
      skyWidth = sky.width(),
      skyHeight = sky.height();

  function generateElement(elementCoord) {
    if (elementCoord.type === 'circle') {
      var element = $('<div class="elem"/>');
      $(element).css({
        width: (parseFloat(elementCoord.width) * skyWidth / 100),
        height: (parseFloat(elementCoord.width) * skyWidth / 100),
        left: (parseFloat(elementCoord.left) * skyWidth / 100),
        top: (parseFloat(elementCoord.top) * skyHeight / 100)
      });
      var bg = $('<div class="elem-bg"/>');
      var txt = $('<p class="elem-text">H</p>');
      $(bg).css({
        opacity: elementCoord.opacity
      });
      $(txt).css({
        "font-size": Math.round(parseFloat(elementCoord.width) * skyWidth / 250)
      });
      $(element).append(bg);
      $(element).append(txt);
      return element;
    }
  }

  function init() {
    var elements = elementsCoordinates.map(generateElement);
    elements.map(
      function(element) {
        sky.append(element);
      });
  }

  init();
}
