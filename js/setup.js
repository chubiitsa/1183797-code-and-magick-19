'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var wizards = [];
var quantityOfWizards = 4;

var wizardsNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardsLastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardscoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardseyesColor = ['black', 'red', 'blue', 'yellow', 'green'];


var getRandomElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

for (var i = 1; i <= quantityOfWizards; i++) {
  wizards.push({
    name: getRandomElement(wizardsNames) + ' ' + getRandomElement(wizardsLastNames),
    coatColor: getRandomElement(wizardscoatColors),
    eyesColor: getRandomElement(wizardseyesColor)
  });
}

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var printWizards = function (arr) {
  var fragment = document.createDocumentFragment();

  for (var j = 0; j < arr.length; j++) {
    fragment.appendChild(renderWizard(arr[j]));
  }
  return fragment;
};

var addWizardsToPage = function (list, arr) {
  return list.appendChild(printWizards(arr));
};

addWizardsToPage(similarListElement, wizards);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
