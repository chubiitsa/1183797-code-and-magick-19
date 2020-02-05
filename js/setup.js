'use strict';

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var wizardCoatColor = setup.querySelector('.setup-wizard').querySelector('.wizard-coat');
var wizardEyesColor = setup.querySelector('.setup-wizard').querySelector('.wizard-eyes');
var fireballColor = setup.querySelector('.setup-fireball-wrap');

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupOpen.addEventListener('click', function () {
  openPopup();
});


setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

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

var changeElementFill = function (arr, elem, inputName) {
  if (elem.style.fill === '') {
    elem.style.fill = arr[0];
  }
  elem.style.fill = arr[arr.indexOf(elem.style.fill) + 1] || arr[0];
  document.querySelector('[name="' + inputName + '"]').value = elem.style.fill;
};

var changeElementBackgroundColor = function (arr, elem, inputName) {
  if (elem.style.backgroundColor === '') {
    elem.style.backgroundColor = arr[0];
  }
  var newColor = arr[arr.indexOf(transformRgb2Hex(elem.style.backgroundColor)) + 1] || arr[0];
  elem.style.backgroundColor = newColor;
  document.querySelector('[name="' + inputName + '"]').value = newColor;
};

wizardEyesColor.addEventListener('click', function () {
  changeElementFill(WIZARDS_EYES_COLORS, wizardEyesColor, 'eyes-color');
});

wizardCoatColor.addEventListener('click', function () {
  changeElementFill(WIZARDS_COAT_COLORS, wizardCoatColor, 'coat-color');
});

fireballColor.addEventListener('click', function () {
  changeElementBackgroundColor(FIREBALL_COLORS, fireballColor, 'fireball-color');
});

var wizards = [];
for (var i = 1; i <= 4; i++) {
  wizards.push({
    name: getRandomElement(WIZARDS_NAMES) + ' ' + getRandomElement(WIZARDS_LASTNAMES),
    coatColor: getRandomElement(WIZARDS_COAT_COLORS),
    eyesColor: getRandomElement(WIZARDS_EYES_COLORS)
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

setup.querySelector('.setup-similar').classList.remove('hidden');
