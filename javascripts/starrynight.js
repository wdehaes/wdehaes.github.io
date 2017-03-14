  function starryNight() {
    var sky = $('#star-sky'),
        totalAppearTime = 2,
        appearTime = 2,
        numberOfStars = 30,
        tlAppear,
        tlTwinkle,
        skyWidth = sky.width(),
        skyHeight = sky.height();

    function generateStar() {

      //TODO
      var star = $('<div class="star"/>');
      $(star).css({
        width: starWidth,
        height: starHeight,
        left: xPos,
        top: yPos
      });
      return star
    }

    function addStar() {
      var star = generateRandomStar();
      sky.append(star);
      var maxBrightness = random(0.5, 1).toFixed(2);
      tlAppear.to(star, appearTime, {opacity: maxBrightness}, "-=" + (numberOfStars-1)*totalAppearTime/numberOfStars);
      tlTwinkle.to(star, appearTime, {opacity: maxBrightness}, "-=" + (numberOfStars-1)*totalAppearTime/numberOfStars);
    }

    function twinkleStars() {
      // body...
    }

    function buildTimeline() {
      tlAppear = new TimelineLite();
      tlTwinkle = new TimelineLite({delay: appearTime});
      for (var i = 0; i < starCoordinates.length; i++) {

      }
    }

    buildTimeline();
  }
