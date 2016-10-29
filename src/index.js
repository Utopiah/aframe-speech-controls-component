/* global AFRAME */

if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

var annyang = require('annyang');
/**
 * Speech Controls component for A-Frame.
 */
AFRAME.registerComponent('speech-controls', {
  schema: {
    positionStep: {default: 1},
  },

  /**
   * Set if component needs multiple instancing.
   */
  multiple: false,

  /**
   * Called once when component is attached. Generally for initial setup.
   */
  init: function () {
    console.log('init...');
    if (annyang) {
      // Let's define a command.
      var commands = {
        'right': this.cmd_move_right(),
      };


      // Add our commands to annyang
      annyang.addCommands(commands);

      // Start listening.
      annyang.start();
      console.log('annyang ok');
    }
  },

  /**
   * Called when component is attached and when component data changes.
   * Generally modifies the entity based on the data.
   */
  update: function (oldData) {

  },

  /**
   * Called when a component is removed (e.g., via removeAttribute).
   * Generally undoes all modifications to the entity.
   */
  remove: function () {

  },

  /**
   * Called when entity pauses.
   * Use to stop or remove any dynamic or background behavior such as events.
   */
  pause: function () {

  },

  /**
   * Called when entity resumes.
   * Use to continue or add any dynamic or background behavior such as events.
   */
  play: function () {

  },

  cmd_move_right: function(){
			console.log('moved right');
			  var position = this.el.getAttribute('position');
			  this.el.setAttribute('position', {x: position.x + 1, y: position.y, z: position.z  } );
		  }
});
