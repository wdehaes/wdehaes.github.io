function protostar(importFunction) {

  var tl_proto = new TimelineLite({onComplete: oneStar(importFunction)}),
      elements = $('.elem').toArray();
  elements.map(function(element) {
    if (element.getAttribute('id') === "20") {
      tl_proto.to(element, 0.05, {opacity:0, autoAlpha: 0}, 'elements');
    } else {
      // var diff = random(0, 1);
      // tl_proto.to(element, 0.8, {opacity:0, autoAlpha: 0}, 'elements+=' + diff);
    }
  });
  elementsText(2);
}
