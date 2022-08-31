(function (window) {
  "use strict";
  window.opspark = window.opspark || {};
  window.opspark.platform = window.opspark.platform || {};

  let platform = window.opspark.platform;

  /**
   * init: This function initializes the platforms for the level.
   *
   * GOAL: Add as many platforms necessary to make your level challenging.
   *
   * Use the createPlatform Function to create platforms for the level.
   *
   * createPlatform() takes these arguments:
   *
   *      createPlatform(x, y, scaleX, scaleY);
   *
   *      x: The x coordineate for the platform.
   *      y: The y coordineate for the platform.
   *      scaleX: OPTIONAL The scale factor on the x-axis, this value will
   *              stretch the platform in width.
   *      scaleY: OPTIONAL The scale factor on the y-axis, this value will
   *              stretch the platform in height.
   */
  function init(game) {
    let createPlatform = platform.create;

    ////////////////////////////////////////////////////////////////////////
    // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////

    /*
     * ground : here, we create a floor. Given the width of of the platform
     * asset, giving it a scaleX and scaleY of 2 will stretch it across the
     * bottom of the game.
     */
    createPlatform(0, game.world.height - 32, 3, 2); // DO NOT DELETE

    // example:
    createPlatform(570, 460, 0.5);
    createPlatform(560, 470, 0.5);
    createPlatform(550, 480, 0.5);
    createPlatform(540, 490, 0.5);
    createPlatform(530, 500, 0.5);
    createPlatform(520, 510, 0.5);
    createPlatform(510, 520, 0.5);
    createPlatform(500, 530, 0.5);
    createPlatform(490, 540, 0.5);
    createPlatform(480, 550, 0.5);
    createPlatform(470, 560, 0.5);
    createPlatform(460, 570, 0.5);
    createPlatform(450, 580, 0.5);
    createPlatform(440, 590, 0.5);
    createPlatform(430, 600, 0.5);
    createPlatform(420, 610, 0.5);
    createPlatform(410, 620, 0.5);
    createPlatform(400, 630, 0.5);
    createPlatform(390, 640, 0.5);

    // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
  }
  platform.init = init;
})(window);
