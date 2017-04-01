function centralStar() {

  var tl, sky;
  function emptyCanvas() {
    sky.empty();
    sky.css({
      background: 'white'
    });
  }

  function starStart() {
    importSVG('star-start', sky);
  }
  function init() {
    sky = $('#elem-sky');
    emptyCanvas();

    tl = new TimelineLite();
    starStart();
  }

  init();
}
