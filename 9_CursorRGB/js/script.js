let main = document.getElementById('main')
let circleMouse = document.getElementById('rgbCircle');

document.addEventListener('mousemove', (e) => {
    createCircle(e);
});

function createCircle(e) {
    circleMouse.style.left = e.pageX + 'px';
    circleMouse.style.top = e.pageY + 'px';

    let anotherCircle = circleMouse.cloneNode(true);

    main.appendChild(anotherCircle);

    circleMouse.style.backgroundColor = getRandomColor();

    setTimeout(() => {
        anotherCircle.remove();
    }, 100);
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 9; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}