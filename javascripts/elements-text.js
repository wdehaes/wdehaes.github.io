function elementsText() {
  var elemText = $('.elements-explanation');
  var tl = new TimelineLite();
  $(elemText).lettering();
  var letters = $('.elements-explanation span').toArray();
  tl
    .to(elemText, 1, { opacity: 1})
    .staggerTo(letters, 0.2, {
      background: '#fff',
      color: '#0D1635'
    }, 0.025)

  var elem = $('.elem-section');
  var tl = new TimelineLite();
  $(elem).lettering();
  var letters = $('.elem span').toArray();
  tl
    .to(elem, 1, { opacity: 1})
    /*
    .staggerTo(letters, 0.3, {
      background: '#fff',
      color: '#0D1635'
    }, 0.05)
    */


}
