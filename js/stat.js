'use strict';

var CLOUD_WIDTH = 420;
var CLOUD__HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var LINE_HEIGHT = 16;
var GAP = 50;
var PADDING = 20;
var BAR_WIDTH = 40;
var SHADOW_SIZE = 10;
var playerBarColor = 'rgba(255, 0, 0, 1)';
var competitorsBarColor = 240;
var barHeight = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD__HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getRandomPercent = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min).toFixed() + '%';
};

var getRandomToneOf = function (hue) {
  return 'hsl(' + hue + ', ' + getRandomPercent(20, 70) + ', ' + getRandomPercent(40, 60) + ')';
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + SHADOW_SIZE, CLOUD_Y + SHADOW_SIZE, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + PADDING, CLOUD_Y + PADDING);
  ctx.fillText('Список результатов: ', CLOUD_X + PADDING, CLOUD_Y + PADDING + LINE_HEIGHT);

  var maxTime = getMaxElement(times);

  ctx.textBaseline = 'middle';

  for (var i = 0; i < names.length; i++) {
    var barX = CLOUD_X + PADDING * 2 + (GAP + BAR_WIDTH) * i;
    var barY = CLOUD_Y + CLOUD__HEIGHT - PADDING;
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], barX, barY);
    ctx.fillText(Math.round(times[i]), barX, barY - LINE_HEIGHT * 2 - Math.round(barHeight * times[i] / maxTime));

    if (names[i] === 'Вы') {
      ctx.fillStyle = playerBarColor;
    } else {
      ctx.fillStyle = getRandomToneOf(competitorsBarColor);
    }
    ctx.fillRect(barX, barY - LINE_HEIGHT, BAR_WIDTH, -(barHeight * times[i]) / maxTime);
  }
};
