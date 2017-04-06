function oneStar() {
  var star = $('.elem#20'),
      sky = $('#elem-sky'),
      skyWidth = sky.width(),
      skyHeight = sky.height(),
      tl_one = new TimelineLite({delay: 2, onComplete: init()});
  var h = star.find('.elem-text');
  var bg = star.find('.elem-bg');
  tl_one.to(h, 1, { opacity: 0, autoAlpha: 0}, 'disappear');
  tl_one.to(star, 3, {opacity: 1, scale: 6.3});
  tl_one.to(bg, 2, {background: '#CB5822', opacity: 1}, "-=2");

  function generateAtomicNuclei(nucleus) {
    if (nucleus.type === 'circle') {
      var element = $('<div class="atom"/>');
      var starWidth = star.width();
      var starHeight = star.height();
      var bgColor = nucleus.width > 0.5 ? "#FF0000" : "white";
      $(element).css({
        width: (parseFloat(nucleus.width) * skyWidth / 100),
        height: (parseFloat(nucleus.width) * skyWidth / 100),
        left: (parseFloat(nucleus.left) * skyWidth / 100 + skyWidth / 2 - starWidth / 2.1 * 6),
        top: (parseFloat(nucleus.top) * skyHeight / 100 + skyHeight / 2 - starHeight / 1.7 * 6),
        background: bgColor,
        opacity: 0
      });
      return element;
    }
  }
  function init() {
    var tl_two = new TimelineLite({delay: 4 });
    var elements = atomicNuclei.map(generateAtomicNuclei);
    elements.map(
      function(element, index) {
        $(element).attr('id', index);
        sky.append(element);
        var diff = random(0, 1.2);
        tl_two.to(element, 2, {opacity: 1 }, 'atoms+=' + diff);
      }
    );
    elementsText(1);
  }

}

