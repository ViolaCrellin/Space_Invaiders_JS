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
  shoot: function() {
    this.game.addBody(new Bullet({ x: this.center.x,
                                   y: this.center.y - this.size.x },
                                 { x: 0, y: -6 }));
  },

  draw: function(screen) {
    Game.drawBody(screen, this);
  }
};
