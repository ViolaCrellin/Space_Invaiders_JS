window.addEventListener("load", function() {
  var screen = document.getElementById("screen").getContext("2d");

  screen.fillRect(10, 10, 10, 10);
  var gameSize = {x: screen.canvas.width, y: screen.canvas.height};
  var game = new Game();
  var keyboard = new Keyboard();
  game.addBody(new Bullet({x: 10, y:10}));
  game.addBody(new Bullet({x: 30, y:10}));
  game.addBody(new Player(gameSize));

  function tick(){
    if (keyboard.isDown(37)){
      console.log("left!");
    } else if (keyboard.isDown(39)){
      console.log("right!");
    }
    bullet.update();
    bullet.draw(screen);
    requestAnimationFrame(tick);
    // please run this in the near future.
  }

  tick();
});
