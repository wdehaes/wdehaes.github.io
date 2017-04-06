function protostar() {

  var tl_proto = new TimelineLite({onComplete: oneStar()}),
      elements = $('.elem').toArray();
  elements.map(function(element) {
    var diff = random(0, 1);
    tl_proto.to(element, 0.8, {opacity:0, autoAlpha: 0}, 'elements+=' + diff);
  });
  elementsText(2);
}
