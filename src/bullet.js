// function Bullet(center) {
//   this.center = center;
//   this.size = {x: 10, y: 10};
//   this.velocity = {x: 1, Y:1};
// }
//
//
// Bullet.prototype = {
//   update: function(){
//     this.moveBulletWithVelocity();
//   },
//   draw: function(screen) {
//     screen.fillRect(this.center.x - this.size.x/2,
//                     this.center.y - this.size.y/2,
//                     this.size.x,
//                     this.size.y);
//   },
//   moveBulletWithVelocity: function(){
//     this.center.x += this.velocity.x;
//     this.center.y += this.velocity.y;
//   },
// };

function Bullet(center, velocity) {
  var WIDTH_HEIGHT = 3;

  this.center = center;
  this.size = { x: WIDTH_HEIGHT, y: WIDTH_HEIGHT };
  this.velocity = velocity;
}

Bullet.prototype = {
  update: function() {
    this.moveWithVelocity();
  },

  moveWithVelocity: function() {
    this.center.x += this.velocity.x;
    this.center.y += this.velocity.y;
  },

  draw: function(screen) {
    Game.drawBody(screen, this);
  }
};
