'use strict';

(function () {
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = window.util.setup.querySelector('.setup-close');

  var onPopupEscPress = function (evt) {
    if (evt.key === window.util.ESC_KEY) {
      closePopup();
    }
  };

  var openPopup = function () {
    window.util.setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    window.util.setup.classList.add('hidden');
    window.util.setup.style.top = window.util.SETUP_POSITION.y + 'px';
    window.util.setup.style.left = window.util.SETUP_POSITION.x + '%';
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === window.util.ENTER_KEY) {
      openPopup();
    }
  });

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === window.util.ENTER_KEY) {
      closePopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });


  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < window.util.SIMILAR_WIZARDS_NUMBER; i++) {
      fragment.appendChild(window.characters.renderWizard(window.util.getRandomElement(wizards)));
    }
    window.characters.similarListElement.appendChild(fragment);

    window.util.setup.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.width = '800px';
    node.style.minHeight = '80px';
    node.style.top = '80px';
    node.style.left = '0';
    node.style.right = '0';
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  var successSubmitHandler = function () {
    window.util.setup.classList.add('hidden');
  };

  window.util.setupForm.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(window.util.setupForm), successSubmitHandler, errorHandler);
    evt.preventDefault();
  });

  window.backend.load(successHandler, errorHandler);

})();
