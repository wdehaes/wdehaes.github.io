function elementsText(number, hideDuration) {
  var letters, tl;
  if (hideDuration === undefined) {
    hideDuration = 0.5;
  }
  tl = new TimelineLite();
  function hideElementsText(number) {
    var elemText = $('.elements-explanation.el-ex-' + number).toArray();
    tl.staggerTo(elemText, hideDuration, {opacity: 0, autoAlpha: 0});
  }
  if (number > 1) {
    hideElementsText(number-1);
  }
  
  var elemText = $('.elements-explanation.el-ex-' + number);
  if(elemText.length > 0) {
    $(elemText).lettering();
    letters = $('.elements-explanation.el-ex-' + number + ' span').toArray();
    tl
      .to(elemText, 1, { opacity: 1})
      .staggerTo(letters, 0.2, {
        background: '#fff',
        color: '#0D1635'
      }, 0.025);

    var elem = $('.elem-section');
    tl = new TimelineLite();
    $(elem).lettering();
    letters = $('.elem span').toArray();
    tl
      .to(elem, 1, { opacity: 1});
  }
}
