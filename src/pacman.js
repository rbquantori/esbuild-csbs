class PacmanComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const canvas = document.createElement("canvas");
    canvas.width = 100;
    canvas.height = 100;
    shadow.appendChild(canvas);
    const ctx = canvas.getContext("2d");

    // Drawing Pacman
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(50, 50, 30, 0.2 * Math.PI, 1.8 * Math.PI);
    ctx.lineTo(50, 50);
    ctx.fill();
    // Pacman's eye
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(55, 32, 3, 0, 2 * Math.PI);
    ctx.fill();
  }
}

customElements.define("pacman-component", PacmanComponent);
