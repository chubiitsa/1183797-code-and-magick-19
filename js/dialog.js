'use strict';

(function () {
  var dialogHandle = window.util.setup.querySelector('.upload');

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

      window.util.setup.style.top = (window.util.setup.offsetTop - shift.y) + 'px';
      window.util.setup.style.left = (window.util.setup.offsetLeft - shift.x) + 'px';
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
