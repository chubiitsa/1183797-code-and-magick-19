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
})();
