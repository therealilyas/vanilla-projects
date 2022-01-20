import DOM from './dom.js';
import {
    direction,
    getLevelGame,
    restartGame,

} from '../modules/service.js'



document.addEventListener('keydown', (e) => {
    direction(e)
});


let easy = DOM.easyBtn.addEventListener('click', () => {
    getLevelGame(200);
});

let normal = DOM.normalBtn.addEventListener('click', () => {
    getLevelGame(100);
});

let hard = DOM.hardBtn.addEventListener('click', () => {
    getLevelGame(80);
});

let restart = DOM.restartBtn.addEventListener('click', () => {
    console.log("Restart")
    restartGame()
});
export default {
    easy,
    normal,
    hard,
    restart
}