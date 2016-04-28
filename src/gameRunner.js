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

function Game(){
  this.bodies = [];
}

Game.prototype = {
  update: function(){
    this.bodies = this.bodiesNotColliding();
    bodies.forEach(function(body){
      body.update();
    });
  },
  draw: function(){
    screen.clearRect(0, 0, this.size.x, this.size.y);
    bodies.forEach(function(body){
      body.draw(screen);
    });
  },
  addBody: function(body){
    this.bodies.push(body);
  },
  bodiesNotColliding: function(){
    var self = this;
    return this.bodies.filter(function(b1){
      return self.bodies
      .filter(function(b2){return Game.isColliding(b1, b2); }).length === 0;
    });
  },
  invadersBelow: function(invader){
    return this.bodies
    .filter(function(b){
      return b instanceof Invader &&
      b.center.y > invader.center.y &&
      Math.abs(b.center.x - invader.center.x) < invader.size.x;
    }).length > 0;
  }
};
