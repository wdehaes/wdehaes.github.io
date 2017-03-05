$(document).ready(function() {
  $('#fullpage').fullpage();

  function starryNight() {
    var sky = $('#sky'),
        totalAppearTime = 2,
        appearTime = 2,
        numberOfStars = 30,
        tlAppear,
        tlTwinkle;

    function randomInt(max, min = 0) {
      return Math.floor(random(max, min));
    }
    function random(max, min = 0) {
      return Math.random() * (max - min) + min;
    }

    function generateRandomStar() {
      var skyWidth = sky.width();
      var skyHeight = sky.height();
      var minStarWidth = Math.floor(skyWidth / 200);
      var maxStarWidth = Math.floor(skyWidth / 30);
      var maxStarHeight = 2 * maxStarWidth;
      var minStarHeight = Math.floor(1.2 * maxStarWidth);
      var xPos = randomInt(maxStarWidth, skyWidth - maxStarWidth);
      var yPos = randomInt(maxStarHeight, skyHeight - maxStarHeight);
      var starWidth = randomInt(minStarWidth, maxStarWidth);
      var starHeight = randomInt(maxStarHeight, minStarHeight);

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
      for (var i = 0; i < numberOfStars; i++) {
        var star = addStar();
      }
    }

    buildTimeline();
  }
  starryNight();

});
