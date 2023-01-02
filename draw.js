class PieCanvas {
  constructor(canvasElement, size) {
    this.canvas = canvasElement;
    this.canvas.height = size;
    this.canvas.width = size;
    this.context = this.canvas.getContext("2d");
    this.center = size / 2;
  }

  drawPieSlice(radius, startAngle, endAngle, fillColor, strokeColor) {
    // expect start-/endAngle to be 1 = 360 DEG = 2*PI RAD
    // substract 0.25 to start North instead of East
    var startAngleRadian = (startAngle - 0.25) * 2 * Math.PI
    var endAngleRadian = (endAngle - 0.25) * 2 * Math.PI
    this.context.save();
    this.context.fillStyle = fillColor;
    this.context.strokeStyle = strokeColor;
    this.context.beginPath();
    this.context.moveTo(this.center, this.center);
    this.context.arc(this.center, this.center, radius, startAngleRadian, endAngleRadian);
    this.context.closePath();
    this.context.fill();
    this.context.stroke();
    this.context.restore();
  }

  drawCircle(radius, strokeColor) {
    this.context.save();
    this.context.strokeStyle = strokeColor;
    this.context.beginPath();
    this.context.arc(this.center, this.center, radius, 0, 2 * Math.PI);
    this.context.stroke();
    this.context.restore();
  }
}

class SegmentedRings {
  constructor(canvasElement, size, padding, ringWidth) {
    this.canvas = new PieCanvas(canvasElement, size);
    this.size = size - 2 * padding;
    this.ringWidth = ringWidth;
  }

  drawSegment(ring, units, startUnit, endUnit, fillColor, strokeColor) {
    var radius = this.size / 2 - ring * this.ringWidth;
    var startAngle = 1 / units * startUnit;
    var endAngle = 1 / units * endUnit;
    this.canvas.drawPieSlice(radius, startAngle, endAngle, fillColor, strokeColor);
  }

  drawHole(ring, fillColor, strokeColor) {
    var radius = this.size / 2 - ring * this.ringWidth;
    this.canvas.drawPieSlice(radius, 0, 2 * Math.PI, fillColor, fillColor);
    this.canvas.drawCircle(radius, strokeColor);
  }
}

const canvasElement = document.getElementById("canvas");
const rings = new SegmentedRings(canvasElement, 500, 20, 30);
for (let i = 0; i < 365; i++) {
  var fillColor = i % 7 < 2 ? "#d9d9d9" : "#b3b3b3"
  rings.drawSegment( 0 , 365 ,   i ,  i + 1 , fillColor , "#000");
}
for (let i = 0; i < 365 - 7; i = i + 7) {
  rings.drawSegment( 1 , 365 ,   i ,  i + 7 , "#fff" , "#000");
}
rings.drawSegment( 2 , 365 ,   0 ,  31 , "#d4cae0" , "#000");
rings.drawSegment( 2 , 365 ,  31 ,  59 , "#c5d3ed" , "#000");
rings.drawSegment( 2 , 365 ,  59 ,  90 , "#c4dbe0" , "#000");
rings.drawSegment( 2 , 365 ,  90 , 120 , "#c3e2d2" , "#000");
rings.drawSegment( 2 , 365 , 120 , 151 , "#d1efbf" , "#000");
rings.drawSegment( 2 , 365 , 151 , 181 , "#def3bf" , "#000");
rings.drawSegment( 2 , 365 , 181 , 212 , "#eaf6bf" , "#000");
rings.drawSegment( 2 , 365 , 212 , 243 , "#f9ecb2" , "#000");
rings.drawSegment( 2 , 365 , 243 , 273 , "#f8e2a9" , "#000");
rings.drawSegment( 2 , 365 , 273 , 304 , "#f6d79f" , "#000");
rings.drawSegment( 2 , 365 , 304 , 334 , "#e9cab3" , "#000");
rings.drawSegment( 2 , 365 , 334 , 365 , "#dfcaca" , "#000");

rings.drawSegment( 3 , 365 , -11 ,  79 , "#c7caff" , "#000");
rings.drawSegment( 3 , 365 ,  79 , 171 , "#c1ebc0" , "#000");
rings.drawSegment( 3 , 365 , 171 , 263 , "#fafabe" , "#000");
rings.drawSegment( 3 , 365 , 263 , 354 , "#f6ca94" , "#000");

rings.drawHole(4, "#FFF","#000")
