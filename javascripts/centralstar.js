function centralStar(importFunction) {

  function starStart() {
    var star = $('.star-start');
    tl.to(star, 1, {opacity: 1});
  }

  var tl, sky;
  function emptyCanvas() {
    sky.empty();
    sky.css({
      background: 'white'
    });
  }

  function init() {
    sky = $('#elem-sky');
    emptyCanvas();

    tl = new TimelineLite();
    importFunction('star-start', sky, starStart);
  }

  init();
}
