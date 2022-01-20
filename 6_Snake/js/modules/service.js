import DOM from './dom.js';
import EVENT from './event.js';

function direction(e) {

    if (e.keyCode == 39 && DOM.dir != "left") {
        DOM.dir = "right";
    } else if (e.keyCode == 37 && DOM.dir != "right") {
        DOM.dir = "left"
    } else if (e.keyCode == 38 && DOM.dir != "down") {
        DOM.dir = "up"
    } else if (e.keyCode == 40 && DOM.dir != "up") {
        DOM.dir = "down"
    }
}

function eatTail(head, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (head.x == arr[i].x && head.y == arr[i].y) {
            gameOver()
        }
    }
}


function drawGame() {
    DOM.ctx.drawImage(DOM.ground, 0, 0);
    DOM.ctx.drawImage(DOM.foodImg, DOM.food.x, DOM.food.y);

    DOM.ctx.fillStyle = 'white';
    DOM.ctx.font = "50px Arial";
    DOM.ctx.fillText(DOM.score, DOM.box * 2.5, DOM.box * 1.7);

    for (let i = 0; i < DOM.snake.length; i++) {
        DOM.ctx.fillStyle = i == 0 ? 'green' : "yellow";
        DOM.ctx.fillRect(DOM.snake[i].x, DOM.snake[i].y, DOM.box, DOM.box);
    }
    let snakeX = DOM.snake[0].x;
    let snakeY = DOM.snake[0].y;
    if (snakeX == DOM.food.x && snakeY == DOM.food.y) {
        DOM.score++
            DOM.food = {
                x: Math.floor(Math.random() * 17 + 1) * DOM.box,
                y: Math.floor(Math.random() * 15 + 3) * DOM.box,
            };

    } else {
        DOM.snake.pop();
    }

    if (snakeX < DOM.box || snakeX > DOM.box * 17 || snakeY < 3 * DOM.box || snakeY > DOM.box * 17) {
        gameOver()
    }


    if (DOM.dir == "left") snakeX -= DOM.box;
    if (DOM.dir == "right") snakeX += DOM.box;
    if (DOM.dir == "up") snakeY -= DOM.box;
    if (DOM.dir == "down") snakeY += DOM.box;
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    eatTail(newHead, DOM.snake)
    DOM.snake.unshift(newHead)

}

function startGame() {
    startGameStyle()
    startGameInit()
    setupDOMListeners()
}

function startGameInit() {
    DOM.dir = '';
    DOM.snake = [];
    DOM.score = 0;
    DOM.snake[0] = {
        x: 9 * DOM.box,
        y: 10 * DOM.box
    }
    DOM.food = {
        x: Math.floor(Math.random() * 17 + 1) * DOM.box,
        y: Math.floor(Math.random() * 15 + 3) * DOM.box
    }
}

function startGameStyle() {
    document.body.style.background = 'black';
    DOM.startGameBox.style.display = 'flex';
}

function setupDOMListeners() {

    EVENT.easy;
    EVENT.normal;
    EVENT.hard;
    EVENT.restart;
}

function gameOver() {
    DOM.gameOverBox.style.display = 'flex';
    DOM.scoreCount.innerText = DOM.score
    clearInterval(DOM.game);

}

function getLevelGame(lvl) {
    DOM.speed = lvl;
    DOM.startGameBox.style.display = 'none';
    DOM.game = setInterval(drawGame, DOM.speed);
}


function restartGame() {
    DOM.gameOverBox.style.display = 'none';
    clearInterval(DOM.game);
    startGameInit()
    drawGame();
    DOM.game = setInterval(drawGame, DOM.speed);
}

export {
    getLevelGame,
    restartGame,
    direction,
    eatTail,
    drawGame,
    startGame,
    gameOver
}