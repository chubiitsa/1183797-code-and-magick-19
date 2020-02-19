'use strict';


(function () {

  var setup = document.querySelector('.setup');
  var wizardElement = setup.querySelector('.setup-wizard');
  var wizardCoatColor = wizardElement.querySelector('.wizard-coat');
  var wizardEyesColor = wizardElement.querySelector('.wizard-eyes');
  var fireballColor = setup.querySelector('.setup-fireball-wrap');

  var changeElementColor = function (arr, elem, inputName) {
    if (elem.tagName.toLowerCase() === 'div') {
      if (elem.style.backgroundColor === '') {
        elem.style.backgroundColor = arr[0];
      }
      elem.style.backgroundColor = arr[arr.indexOf(window.util.transformRgb2Hex(elem.style.backgroundColor)) + 1] || arr[0];
      document.querySelector('[name="' + inputName + '"]').value = window.util.transformRgb2Hex(elem.style.backgroundColor);
    } else {
      if (elem.style.fill === '') {
        elem.style.fill = arr[0];
      }
      var newColor = arr[arr.indexOf(elem.style.fill) + 1] || arr[0];
      elem.style.fill = newColor;
      document.querySelector('[name="' + inputName + '"]').value = newColor;
    }
    return newColor;
  };

  var wizard = {
    onEyesChange: function () {
    },
    onCoatChange: function () {
    },
  };

  wizardEyesColor.addEventListener('click', function () {
    var newColor = changeElementColor(window.util.WIZARDS_EYES_COLORS, wizardEyesColor, 'eyes-color');
    wizard.onEyesChange(newColor);
  });

  wizardCoatColor.addEventListener('click', function () {
    var newColor = changeElementColor(window.util.WIZARDS_COAT_COLORS, wizardCoatColor, 'coat-color');
    wizard.onCoatChange(newColor);
  });

  fireballColor.addEventListener('click', function () {
    changeElementColor(window.util.FIREBALL_COLORS, fireballColor, 'fireball-color');
  });

  window.wizard = wizard;
})();
