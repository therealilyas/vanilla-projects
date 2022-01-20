let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");
let startGameBox = document.getElementById('start');
let gameOverBox = document.getElementById("gameOver");
let scoreCount = document.getElementById('score');
let easyBtn = document.getElementById('easy');
let normalBtn = document.getElementById('normal');
let hardBtn = document.getElementById('hard');
let restartBtn = document.getElementById('restartBtn');

let dir;
let box = 32;
let score = 0;

let game;
let speed;
let snake = [];
let food
const ground = new Image();
ground.src = "img/ground.png";

const foodImg = new Image();
foodImg.src = "img/food.png";


export default {
    easyBtn,
    normalBtn,
    hardBtn,
    restartBtn,
    box,
    dir,
    canvas,
    ctx,
    startGameBox,
    speed,
    snake,
    score,
    scoreCount,
    gameOverBox,
    game,
    ground,
    food,
    foodImg

}