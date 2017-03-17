function elementsText() {
  var elemText = $('.elements-explanation');
  var tl = new TimelineLite();
  $(elemText).lettering();
  var letters = $('.elements-explanation span').toArray();
  tl
    .to(elemText, 1, { opacity: 1})
    .staggerTo(letters, 0.3, {
      background: '#000',
    }, 0.05)

}
