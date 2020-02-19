'use strict';

(function () {
  var wizards = [];
  var similarList = document.querySelector('.setup-similar-list');
  var similar = document.querySelector('.setup-similar');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');


  for (var i = 1; i <= 4; i++) {
    wizards.push({
      name: window.util.getRandomElement(window.util.WIZARDS_NAMES) + ' ' + window.util.getRandomElement(window.util.WIZARDS_LASTNAMES),
      coatColor: window.util.getRandomElement(window.util.WIZARDS_COAT_COLORS),
      eyesColor: window.util.getRandomElement(window.util.WIZARDS_EYES_COLORS)
    });
  }

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  window.render = function (data) {
    var takeNumber = data.length > 4 ? 4 : data.length;
    similarList.innerHTML = '';
    for (var j = 0; j < takeNumber; j++) {
      similarList.appendChild(renderWizard(data[j]));
    }
    similar.classList.remove('hidden');
  };
})();
