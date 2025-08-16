const canvas = document.getElementById("smoke");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 25 + 10;
    this.weight = Math.random() * 0.5 + 0.5;
    this.directionX = (Math.random() - 0.5) * 1.5;
  }
  update() {
    this.y -= this.weight;
    this.x += this.directionX;
    if (this.size > 0.2) this.size -= 0.05;
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = "rgba(200,200,200,0.08)";
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function init() {
  particles = [];
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle(Math.random() * canvas.width, canvas.height));
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    p.update();
    p.draw();
    if (p.size <= 0.2) {
      particles[i] = new Particle(Math.random() * canvas.width, canvas.height);
    }
  });
  requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

canvas.addEventListener("mousemove", (e) => {
  for (let i = 0; i < 5; i++) {
    particles.push(new Particle(e.x, e.y));
  }
});
