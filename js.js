const select = document.getElementsByName('button');
const ln = select.length;
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');
const clear = document.getElementById('clear');
const reg = document.getElementById('lineWidth');

ctx.width = window.innerWidth;
ctx.height = window.innerHeight;
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 100;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function change() {
    reg.addEventListener('mousemove', function() {
        console.log('hehe')

    });

};
reg.addEventListener('mousedown', change);


document.addEventListener('DOMContentLoaded', function() {
    for (var i = 0; i < ln; i++) {
        const color = select[i].id;
        select[i].addEventListener('mousedown', function() {
            ctx.strokeStyle = color;
        });
    };
});
clear.addEventListener('click', function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}, false);

function draw(e) {
    if (!isDrawing) return;
    console.log(e);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];

}
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];

});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);