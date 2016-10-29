AFRAME.registerComponent('speech-command-input', {
// modify an entity based on a speech command
  schema: { unit: 1 },

  init: function(){},  
  
  update: function () {
  var object3D = this.el.object3D;    var data = this.data;    object3D.position.set(data.x, data.y, data.z);  },

  cmd_move_left: function(){
  var object3D = this.el.object3D;    var data = this.data;    object3D.position.set(data.x-unit, data.y, data.z);  },
  cmd_move_right: function(){},
  cmd_move_up: function(){},
  cmd_move_down: function(){},
  cmd_move_forward: function(){},
  cmd_move_backward: function(){},
});
