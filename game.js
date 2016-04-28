window.addEventListener("load", function() {
  var screen = document.getElementById("screen").getContext("2d");

  screen.fillRect(10, 10, 10, 10);

  var bullet = new Bullet();

  function tick(){
    bullet.update();
    bullet.draw(screen);
    requestAnimationFrame(tick);
    // please run this in the near future.
  }

  tick();
});


function Bullet() {
  this.center = {x: 10, y: 10};
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
