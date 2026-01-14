const canvas = document.getElementById("rain");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let drops = [];
let maxDrops = 300;

// cria gotas
for (let i = 0; i < maxDrops; i++) {
    drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 4 + Math.random() * 6,
        length: 10 + Math.random() * 20
    });
}

// relâmpago
let lightningAlpha = 0;

function drawRain() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // chuva verde
    ctx.strokeStyle = "rgba(0, 255, 0, 0.7)";
    ctx.lineWidth = 1;

    for (let d of drops) {
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x, d.y + d.length);
        ctx.stroke();

        d.y += d.speed;

        if (d.y > canvas.height) {
            d.y = -20;
            d.x = Math.random() * canvas.width;
        }
    }

    // relâmpago
    if (Math.random() < 0.005) {
        lightningAlpha = 1;
    }

    if (lightningAlpha > 0) {
        ctx.fillStyle = `rgba(200, 255, 200, ${lightningAlpha})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        lightningAlpha -= 0.05;
    }

    requestAnimationFrame(drawRain);
}

drawRain();

// resize
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
const canvas = document.getElementById("rain");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let drops = [];

for (let i = 0; i < 500; i++) {
    drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 6 + Math.random() * 10,
        length: 15 + Math.random() * 30,
        alpha: 0.2 + Math.random() * 0.5
    });
}

function drawRain() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drops.forEach(d => {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(180, 0, 0, ${d.alpha})`;
        ctx.lineWidth = 1.2;
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x, d.y + d.length);
        ctx.stroke();

        d.y += d.speed;

        if (d.y > canvas.height) {
            d.y = -50;
            d.x = Math.random() * canvas.width;
        }
    });

    requestAnimationFrame(drawRain);
}

drawRain();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
