function elementsText(number, hideDuration = 0.5) {
  var tl = new TimelineLite();
  function hideElementsText(number) {
    var elemText = $('.elements-explanation.el-ex-' + number).toArray();
    tl.staggerTo(elemText, hideDuration, {opacity: 0, autoAlpha: 0})
  }
  if (number > 1) {
    hideElementsText(number-1);
  }
  var elemText = $('.elements-explanation.el-ex-' + number);
  if(elemText.length > 0) {
    $(elemText).lettering();
    var letters = $('.elements-explanation.el-ex-' + number + ' span').toArray();
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
      .to(elem, 1, { opacity: 1});
  }
}
