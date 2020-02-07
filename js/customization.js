'use strict';

(function () {
  var wizardCoatColor = window.util.setup.querySelector('.setup-wizard').querySelector('.wizard-coat');
  var wizardEyesColor = window.util.setup.querySelector('.setup-wizard').querySelector('.wizard-eyes');
  var fireballColor = window.util.setup.querySelector('.setup-fireball-wrap');

  var changeElementColor = function (arr, elem, inputName) {
    if (elem.tagName.toLowerCase() === 'div') {
      if (elem.style.backgroundColor === '') {
        elem.style.backgroundColor = arr[0];
      }
      elem.style.backgroundColor = arr[arr.indexOf(window.util.transformRgb2Hex(elem.style.backgroundColor)) + 1] || arr[0];
      document.querySelector('[name="' + inputName + '"]').value = elem.style.backgroundColor;
    } else {
      if (elem.style.fill === '') {
        elem.style.fill = arr[0];
      }
      elem.style.fill = arr[arr.indexOf(elem.style.fill) + 1] || arr[0];
      document.querySelector('[name="' + inputName + '"]').value = elem.style.fill;
    }
  };

  wizardEyesColor.addEventListener('click', function () {
    changeElementColor(window.util.WIZARDS_EYES_COLORS, wizardEyesColor, 'eyes-color');
  });

  wizardCoatColor.addEventListener('click', function () {
    changeElementColor(window.util.WIZARDS_COAT_COLORS, wizardCoatColor, 'coat-color');
  });

  fireballColor.addEventListener('click', function () {
    changeElementColor(window.util.FIREBALL_COLORS, fireballColor, 'fireball-color');
  });
})();
