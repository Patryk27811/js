"use strict";

var _waz = require("./waz.js");

var _jedzenie = require("./jedzenie.js");

var _grid = require("./grid.js");

var lastRenderTime = 0;
var gameOver = false;
var gameBoard = document.getElementById('plansza');

function main(currentTime) {
  if (gameOver) {
    if (confirm('Przegrałeś. Wcisnij ok by zagrać ponownie')) {
      window.location = '/';
    }

    return;
  }

  window.requestAnimationFrame(main);
  var secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / _waz.SNAKE_SPEED) return;
  lastRenderTime = currentTime;
  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  (0, _waz.update)();
  (0, _jedzenie.update)();
  checkDeath();
}

function draw() {
  gameBoard.innerHTML = '';
  (0, _waz.draw)(gameBoard);
  (0, _jedzenie.draw)(gameBoard);
}

function checkDeath() {
  gameOver = (0, _grid.outsideGrid)((0, _waz.getSnakeHead)()) || (0, _waz.snakeIntersection)();
}