class YearCirle {
  constructor(canvasElement, size, padding, bandWidth) {
    this.canvas = canvasElement;
    this.canvas.height = size;
    this.canvas.width = size;
    this.context = this.canvas.getContext("2d");
    this.radius = size - 2 * padding
    this.center = size / 2;
  }

  draw() {
    return this.height * this.width;
  }
  function drawPieSlice(
    ctx,
    centerX,
    centerY,
    radius,
    startAngle,
    endAngle,
    fillColor,
    strokeColor
  ) {
    ctx.save();
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = strokeColor;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }
}

const square = new YearCirle(document.getElementById("myCanvas"), 500, 25);

var myCanvas = document.getElementById("myCanvas");
myCanvas.width = 500;
myCanvas.height = 500;

var ctx = myCanvas.getContext("2d");

function drawLine(ctx, startX, startY, endX, endY, color) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
  ctx.restore();
}

function drawArc(ctx, centerX, centerY, radius, startAngle, endAngle, color) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, startAngle, endAngle);
  ctx.stroke();
  ctx.restore();
}


function drawDays(ctx, centerX, centerY, radius) {

}
// drawPieSlice(ctx, centerX, centerY, radius, startAngle, endAngle, fillColor, strokeColor)
drawPieSlice(ctx, 250, 250, 250, Math.PI/1, Math.PI/2 + Math.PI/3, "#F00", "#000");
drawPieSlice(ctx, 250, 250, 220, Math.PI/3, Math.PI/2 + Math.PI/2, "#0F0", "#000");
