'use strict';

(function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';
  var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARDS_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARDS_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARDS_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var SETUP_POSITION = {
    x: 50,
    y: 80,
  };

  var setup = document.querySelector('.setup');

  var getRandomElement = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  var transformRgb2Hex = function (rgb) {
    var hex = function (x) {
      return ('0' + parseInt(x, 10).toString(16)).slice(-2);
    };
    rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(,\s*\d+\.*\d+)?\)$/);
    return '#' + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
  };

  window.util = {
    ESC_KEY: ESC_KEY,
    ENTER_KEY: ENTER_KEY,
    WIZARDS_NAMES: WIZARDS_NAMES,
    WIZARDS_LASTNAMES: WIZARDS_LASTNAMES,
    WIZARDS_COAT_COLORS: WIZARDS_COAT_COLORS,
    WIZARDS_EYES_COLORS: WIZARDS_EYES_COLORS,
    FIREBALL_COLORS: FIREBALL_COLORS,
    SETUP_POSITION: SETUP_POSITION,
    setup: setup,
    getRandomElement: getRandomElement,
    transformRgb2Hex: transformRgb2Hex,
  };
})();
