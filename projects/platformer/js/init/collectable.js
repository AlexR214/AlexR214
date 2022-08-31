(function (window) {
  "use strict";
  window.opspark = window.opspark || {};
  window.opspark.collectable = window.opspark.collectable || {};
  let collectable = window.opspark.collectable;

  let type = {
    db: { assetKey: "db", points: 10 },
    max: { assetKey: "max", points: 20 },
    steve: { assetKey: "steve", points: 30 },
    grace: { assetKey: "grace", points: 40 },
    kennedi: { assetKey: "kennedi", points: 50 },
  };

  window.opspark.collectable.type = type;

  /**
   * init: Initialize all collectables.
   *
   * GOAL: Add as many collectables as necessary to make your level challenging.
   *
   * Use the createCollectable() Function to create collectables for the level.
   * See the type Object, above, for the types of collectables and their point values.
   *
   * createCollectable() takes these arguments:
   *
   *      createCollectable(type, x, y, gravity, bounce);
   *
   *      type: The type of the collectable, use the type Object above.
   *      x: The x coordineate for the collectable.
   *      y: The y coordineate for the collectable.
   *      gravity: OPTIONAL The gravitational pull on the collectable.
   *      bounce: OPTIONAL A factor effecting how much the collectable will bounce off platforms, etc.
   */
  function init(game) {
    let createCollectable = collectable.create;

    ////////////////////////////////////////////////////////////////////////
    // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////

    // example:
    createCollectable(type.db, 200, 170, 6, 0.7);
    createCollectable(type.db, 210, 180, 6, 0.7);
    createCollectable(type.db, 220, 190, 6, 0.7);
    createCollectable(type.db, 230, 200, 6, 0.7);
    createCollectable(type.db, 240, 210, 6, 0.7);
    createCollectable(type.db, 250, 220, 6, 0.7);
    createCollectable(type.db, 260, 230, 6, 0.7);
    createCollectable(type.db, 270, 240, 6, 0.7);
    createCollectable(type.db, 280, 250, 6, 0.7);
    createCollectable(type.db, 290, 260, 6, 0.7);
    createCollectable(type.db, 300, 270, 6, 0.7);
    createCollectable(type.db, 310, 280, 6, 0.7);
    createCollectable(type.db, 320, 290, 6, 0.7);
    createCollectable(type.db, 330, 300, 6, 0.7);
    createCollectable(type.db, 340, 310, 6, 0.7);
    createCollectable(type.db, 350, 320, 6, 0.7);
    createCollectable(type.db, 360, 330, 6, 0.7);
    createCollectable(type.db, 370, 340, 6, 0.7);
    createCollectable(type.db, 380, 350, 6, 0.7);
    createCollectable(type.db, 390, 360, 6, 0.7);
    createCollectable(type.db, 400, 370, 6, 0.7);
    createCollectable(type.db, 410, 380, 6, 0.7);
    createCollectable(type.db, 420, 390, 6, 0.7);
    createCollectable(type.db, 430, 400, 6, 0.7);
    createCollectable(type.db, 440, 410, 6, 0.7);
    createCollectable(type.db, 450, 420, 6, 0.7);
    
    // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
  }
  collectable.init = init;
})(window);
