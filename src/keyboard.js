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

  this.KEYS = { LEFT: 37, RIGHT: 39, SPACE: 32 };
}
