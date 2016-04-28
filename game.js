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
  }
};

function Keyboard(){
  var keyState = {};

  window.addEventListener("keydown", function(event){
    keyState[event.keyCode] = true;
  });

  window.addEventListener("keyup", function(event){
    keyState[event.keyCode] = false;
  });

  this.isDown = function(keyCode) {
    return keyState[keyCode] === true;
  };
}

function Player(gameSize){
  var WIDTH_HEIGHT = 15;
  this.keyboard = new Keyboard();
  this.center = {x: gameSize.x/2, y: gameSize.y/2};
  this.size = {x: WIDTH_HEIGHT, y: WIDTH_HEIGHT};
}

Player.prototype = {
  update: function(){
    this.moveInResponseToPlayerInput();
    this.shootInResponseToPlayerInput();
  },
  moveInResponseToPlayerInput: function(){
    if (this.keyboard.isDown(this.keyboard.KEYS.LEFT)){
      this.moveLeft();
    } else if (this.keyboard.isDown(this.keyboard.KEYS.RIGHT)){
      this.moveRight();
    }
  },

  moveRight: function(){
    this.center.x +=2;
  },
  moveLeft: function(){
    this.center.x -= 2;
  },
  shootInResponseToPlayerInput: function(){
    if (this.keyboard.isDown(this.keyboard.KEYS.SPACE)){
      this.shoot();
    }
  },
  shoot: function(){

  },
};

/// BULLET

function Bullet(center) {
  this.center = center;
  this.size = {x: 10, y: 10};
  this.velocity = {x: 1, Y:1};
}


Bullet.prototype = {
  update: function(){
    this.moveBulletWithVelocity();
  },
  draw: function(screen) {
    screen.fillRect(this.center.x - this.size.x/2,
                    this.center.y - this.size.y/2,
                    this.size.x,
                    this.size.y);
  },
  moveBulletWithVelocity: function(){
    this.center.x += this.velocity.x;
    this.center.y += this.velocity.y;
  },
};
