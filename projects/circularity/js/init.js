var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
     window.opspark.makeGame = function() {
        
            window.opspark.game = {};
            var game = window.opspark.game;
            
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM SETUP ////////////////////////////
        ////////////////////////////////////////////////////////////
        /* */
       
        var circle;	
        var circles = [];

        var howMany = Number(prompt("How many cirlces do you want?"))
        var howFast = Number(prompt("How fast do you want the cirlces?"))
        
        function drawCircle() {
            circle = draw.randomCircleInArea(canvas, true, true, '#999', 2);
            physikz.addRandomVelocity(circle, canvas);
            view.addChild(circle);
            circles.push(circle);
            //MAKES THEM FASTER
            physikz.addRandomVelocity(circle, canvas, howFast, howFast);
        }

        //MAKES MORE CIRLCES
     

        for (var loopsCompleted = 0; loopsCompleted < howMany; loopsCompleted++) {
            drawCircle();
        }
        

        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM LOGIC ////////////////////////////
        ////////////////////////////////////////////////////////////
        
       
        function update() {
        

            for (var i = 0; i < circles.length; i++) {
                var eachCircle = circles[i]
                physikz.updatePosition(circles[i]);
                game.checkCirclePosition(circles[i]);                
               
             }

        }

              game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if ( circle.x > canvas.width ) {
                circle.x = 0;
            }
            if ( circle.x < 0 ) {
                circle.x = canvas.width;
            }
            if ( circle.y > canvas.height ) {
                circle.y = 0;
            }
            if ( circle.y < 0 ) {
                circle.y = canvas.height;
            }
            
          
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
