'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var dialogHandle = setup.querySelector('.upload');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var setupForm = setup.querySelector('.setup-wizard-form');

  var onPopupEscPress = function (evt) {
    if (evt.key === window.util.ESC_KEY) {
      closePopup();
    }
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    setup.style.top = window.util.SETUP_POSITION.y + 'px';
    setup.style.left = window.util.SETUP_POSITION.x + '%';
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

  var successSubmitHandler = function () {
    setup.classList.add('hidden');
  };

  setupForm.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(setupForm), successSubmitHandler, window.similar.errorHandler);
    evt.preventDefault();
  });

  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startPoint = {
      x: evt.clientX,
      y: evt.clientY
    };

    var isDragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      isDragged = true;

      var shift = {
        x: startPoint.x - moveEvt.clientX,
        y: startPoint.y - moveEvt.clientY
      };

      startPoint = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (isDragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandle.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandle.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
