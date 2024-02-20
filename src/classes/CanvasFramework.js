class Drawable {
    constructor(ctx) {
        this.ctx = ctx;
    }
    draw() {
        console.log('draw');
    }
}

class Config {
    constructor() {
        this.position = { x: 0, y: 0 };
        this.size = { width: 0, height: 0 };
        this.backgroundColor = 'white';
        this.border = { color: 'black', width: 1 };
    }
}

class Shape extends Drawable {
    constructor(ctx, config = new Config()) {
        super(ctx);
        this.config = config;
    }
    draw() {
        const { position, size, backgroundColor, border } = this.config;
        this.ctx.fillStyle = backgroundColor;
        this.ctx.strokeStyle = border.color;
        this.ctx.lineWidth = border.width;
        this.drawShape(position, size);
    }
}

class Rect extends Shape {
    drawShape(position, size) {
        this.ctx.fillRect(position.x, position.y, size.width, size.height);
        this.ctx.strokeRect(position.x, position.y, size.width, size.height);
    }
}

class Circle extends Shape {
    drawShape(position, size) {
        this.ctx.beginPath();
        this.ctx.arc(position.x, position.y, size.width / 2, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.stroke();
    }
}

class Polygon extends Shape {
    drawShape(position, size) {
        const { points } = this.config;
        this.ctx.beginPath();
        this.ctx.moveTo(points[0].x, points[0].y);
        points.forEach((point, index) => {
            if (index !== 0) {
                this.ctx.lineTo(point.x, point.y);
            }
        });
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();
    }
}

class Text extends Drawable {
    constructor(ctx, config = new Config()) {
        super(ctx);
        this.config = config;
    }
    draw() {
        const { position, text, font, color } = this.config;
        this.ctx.font = font;
        this.ctx.fillStyle = color;
        this.ctx.fillText(text, position.x, position.y);
    }
}

class Button extends Drawable {
    constructor(ctx, config = new Config(), shape) {
        super(ctx);
        this.config = config;
        this.shape = shape;
        this.text = new Text(ctx, config);
    }
    draw() {
        this.shape.draw();
        this.text.draw();
    }
}

class ToggleButton extends Button {
    constructor(ctx, config = new Config(), shape) {
        super(ctx, config, shape);
        this.on = config.on || false;
    }
    toggle() {
        this.on = !this.on;
    }
}

class CanvasFramework {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.drawables = [];
    }
    addDrawable(drawable) {
        this.drawables.push(drawable);
    }
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawables.forEach(drawable => drawable.draw());
    }
}

class Animation {
    constructor(canvasFramework) {
        this.canvasFramework = canvasFramework;
        this.animationFrame = null;
    }
    start() {
        const step = () => {
            this.canvasFramework.draw();
            this.animationFrame = window.requestAnimationFrame(step);
        };
        this.animationFrame = window.requestAnimationFrame(step);
        console.log(this.animationFrame);
    }
    stop() {
        window.cancelAnimationFrame(this.animationFrame);
        console.log(this.animationFrame);
    }
}

class AnimationManager {
    constructor() {
        this.animations = [];
    }
    addAnimation(animation) {
        this.animations.push(animation);
    }
    startAll() {
        this.animations.forEach(animation => animation.start());
    }
    stopAll() {
        this.animations.forEach(animation => animation.stop());
    }
}

// Implementazione

const canvas = document.getElementById('canvas');
canvas.width = 2000;
canvas.height = 1000;

const canvasFramework = new CanvasFramework(canvas);
const animation = new Animation(canvasFramework);
const animationManager = new AnimationManager();

const rectButtonStart = new ToggleButton(canvasFramework.ctx, {
    position: { x: 100, y: 100 },
    size: { width: 100, height: 50 },
    text: 'Start',
    backgroundColor: 'green',
    border: { color: 'black', width: 1 },
    on: false
}, new Rect(canvasFramework.ctx));

const rectButtonStop = new Button(canvasFramework.ctx, {
    position: { x: 100, y: 200 },
    size: { width: 100, height: 50 },
    text: 'Stop',
    backgroundColor: 'red',
    border: { color: 'black', width: 1 }
}, new Rect(canvasFramework.ctx));

rectButtonStart.onClick = () => {
    rectButtonStart.toggle();
    if (rectButtonStart.on) animation.start();
    else animation.stop();
};

canvasFramework.addDrawable(rectButtonStart);
canvasFramework.addDrawable(rectButtonStop);
animationManager.addAnimation(animation);

animationManager.startAll();
