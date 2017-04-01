function centralStar() {

  function starStart() {
    var star = $('.star-start');
    tl.to(star, 1, {opacity: 1});
  }
  function importSVG(svgName, target) {
    $.get('/img/' + svgName + '.svg', function(data) {
      target.append($(data).contents());
      starStart();
    });
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
    importSVG('star-start', sky);
  }

  init();
}
