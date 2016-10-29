/* global AFRAME */

if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

var annyang = require('annyang');

var targetMoveLeft = function(){
  console.log('moved target left');
  var entity = document.getElementById('target');
  pos = entity.getComputedAttribute('position');
  entity.setAttribute('position', {x: pos.x-1, y: pos.y, z: pos.z});
}
var targetMoveRight = function(){
  console.log('moved target right');
  var entity = document.getElementById('target');
  pos = entity.getComputedAttribute('position');
  entity.setAttribute('position', {x: pos.x+1, y: pos.y, z: pos.z});
}
var targetMoveUp = function (){
  console.log('moved target up');
  var entity = document.getElementById('target');
  pos = entity.getComputedAttribute('position');
  entity.setAttribute('position', {x: pos.x, y: pos.y+1, z: pos.z});
}
var targetMoveDown = function (){
  console.log('moved target down');
  var entity = document.getElementById('target');
  pos = entity.getComputedAttribute('position');
  entity.setAttribute('position', {x: pos.x, y: pos.y-1, z: pos.z});
}
var targetMoveForward = function (){
  console.log('moved target forward');
  var entity = document.getElementById('target');
  pos = entity.getComputedAttribute('position');
  entity.setAttribute('position', {x: pos.x, y: pos.y, z: pos.z-1});
}
var targetMoveBackward = function (){
  console.log('moved target backward');
  var entity = document.getElementById('target');
  pos = entity.getComputedAttribute('position');
  entity.setAttribute('position', {x: pos.x, y: pos.y, z: pos.z+1});
}

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

      var commands = {
        'left': targetMoveLeft, //fails
        'right': targetMoveRight,
        'forward': targetMoveForward, //OK
        'backward': targetMoveBackward,
        'downward': targetMoveDown,
        'upward': targetMoveUp
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

});
