
let canvas = document.getElementById('maze-canvas');
canvas.height = 700;
canvas.width = 600;

let c = canvas.getContext("2d");
c.fillStyle = "#000";
c.fillRect (0, 0, 600, 700);


// // border
  const radius = 10;
  // TOP HALF
  c.beginPath();
  c.moveTo(0, 270);
  // left middle part
  c.arcTo(200, 270, 200, 260, radius);
  c.arcTo(200, 200, 190, 200, radius);
  c.arcTo(20, 200, 20, 190, radius);
  // top part
  c.arcTo(20, 20, 100, 20, radius);
  c.arcTo(290, 20, 290, 40, radius);
  c.arcTo(290, 100, 309, 100, radius);
  c.arcTo(309, 100, 309, 60, radius);
  c.arcTo(309, 20, 315, 20, radius);
  c.arcTo(580, 20, 580, 100, radius);
  c.arcTo(580, 150, 580, 200, radius);
  // right middle part
  c.arcTo(580, 200, 500, 200, radius);
  c.arcTo(400, 200, 400, 210, radius);
  c.arcTo(400, 270, 410, 270, radius);
  c.arcTo(600, 270, 600, 310, 0);
  c.strokeStyle = "blue";
  c.lineWidth = 3;
  c.stroke();

  c.beginPath();
  c.moveTo(0, 330);
  c.arcTo(200, 330, 200, 340, radius);
  c.arcTo(200, 400, 190, 400, radius);
  c.arcTo(20, 400, 20, 410, radius);

  c.arcTo(20, 520, 30, 520, radius);
  c.arcTo(100, 520, 100, 530, radius);
  c.arcTo(100, 530, 90, 530, radius);
  c.arcTo(100, 550, 90, 550, radius);
  c.arcTo(20, 550, 20, 560, radius);
  c.arcTo(20, 680, 30, 680, radius);
  c.arcTo(580, 680, 580, 670, radius);
  // going up on right side
  c.arcTo(580, 550, 570, 550, radius);
  c.arcTo(500, 550, 500, 540, radius);
  c.arcTo(500, 520, 510, 520, radius);
  c.arcTo(580, 520, 580, 510, radius);
  c.arcTo(580, 400, 570, 400, radius);
  c.arcTo(400, 400, 400, 390, radius);
  c.arcTo(400, 330, 410, 330, radius);
  c.arcTo(600, 330, 600, 330, 0);
  c.strokeStyle = "blue";
  c.lineWidth = 3;
  c.stroke();

// TOP-LEFT BOXES:
  // top-left box (top-left)
  c.beginPath();
  c.moveTo(90, 60);
  c.arcTo(125, 60, 125, 70, radius);
  c.arcTo(125, 100, 120, 100, radius);
  c.arcTo(60, 100, 60, 90, radius);
  c.arcTo(60, 60, 85, 60, radius);
  c.closePath();
  c.strokeStyle = "blue";
  c.lineWidth = 3;
  c.stroke();

  // top-left box (bottom-left)
  c.beginPath();
  c.moveTo(90, 140);
  c.arcTo(125, 140, 125, 150, radius);
  c.arcTo(125, 160, 120, 160, radius);
  c.arcTo(60, 160, 60, 150, radius);
  c.arcTo(60, 140, 85, 140, radius);
  c.closePath();
  c.strokeStyle = "blue";
  c.lineWidth = 3;
  c.stroke();

  // top-left box (top-right)
  c.beginPath();
  c.moveTo(190, 60);
  c.arcTo(250, 60, 250, 70, radius);
  c.arcTo(250, 100, 240, 100, radius);
  c.arcTo(165, 100, 165, 90, radius);
  c.arcTo(165, 60, 180, 60, radius);
  c.closePath();
  c.strokeStyle = "blue";
  c.lineWidth = 3;
  c.stroke();

  // TOP-RIGHT BOXES:
    // top-right box (top-right)
    c.beginPath();
    c.moveTo(500, 60);
    c.arcTo(540, 60, 540, 70, radius);
    c.arcTo(540, 100, 535, 100, radius);
    c.arcTo(475, 100, 475, 90, radius);
    c.arcTo(475, 60, 485, 60, radius);
    c.closePath();
    c.strokeStyle = "blue";
    c.lineWidth = 3;
    c.stroke();

    // top-right box (bottom-right)
    c.beginPath();
    c.moveTo(500, 140);
    c.arcTo(540, 140, 540, 150, radius);
    c.arcTo(540, 160, 535, 160, radius);
    c.arcTo(475, 160, 475, 150, radius);
    c.arcTo(475, 140, 485, 140, radius);
    c.closePath();
    c.strokeStyle = "blue";
    c.lineWidth = 3;
    c.stroke();

    // top-left box (top-right)
    c.beginPath();
    c.moveTo(400, 60);
    c.arcTo(435, 60, 435, 70, radius);
    c.arcTo(435, 100, 425, 100, radius);
    c.arcTo(350, 100, 350, 90, radius);
    c.arcTo(350, 60, 360, 60, radius);
    c.closePath();
    c.strokeStyle = "blue";
    c.lineWidth = 3;
    c.stroke();


// const topStraightLine = (startX, startY) => {
//   c.fillStyle = "#000";
//   c.fillRect (startX, startY, 21.5, 22.5);
//   c.beginPath();
//   c.moveTo(startX, startY);
//   c.lineTo(startX+21.5, startY);
//   c.strokeStyle = "blue";
//   c.lineWidth = 3;
//   c.stroke();
// };
// topStraightLine(0, 0);
//
// // bottom line
// const bottomStraightLine = (startX, startY) => {
//   c.fillStyle = "#000";
//   c.fillRect (startX, startY, 21.5, 22.5);
//   c.beginPath();
//   c.moveTo(startX-1, startY+22);
//   c.lineTo(startX+23, startY+22);
//   c.strokeStyle = "blue";
//   c.lineWidth = 3;
//   c.stroke();
// };
// bottomStraightLine(40, 0);
//
// // right line
// const rightLine = (startX, startY) => {
//   c.fillStyle = "#000";
//   c.fillRect (startX, startY, 21.5, 22.5);
//   c.beginPath();
//   c.moveTo(startX+21, startY);
//   c.lineTo(startX+21, startY+23);
//   c.strokeStyle = "blue";
//   c.lineWidth = 3;
//   c.stroke();
// };
// rightLine(80, 0);
//
// // left line
// const leftLine = (startX, startY) => {
//   c.fillStyle = "#000";
//   c.fillRect (startX, startY, 21.5, 22.5);
//   c.beginPath();
//   c.moveTo(startX, startY);
//   c.lineTo(startX, startY+23);
//   c.strokeStyle = "blue";
//   c.lineWidth = 3;
//   c.stroke();
// };
// leftLine(120, 0);
//
// // top-left curve
// const leftTopCurve = (startX, startY) => {
//   c.fillStyle = "#000";
//   let radius = 10;
//   c.fillRect (startX, startY, 21.5, 22.5);
//   c.beginPath();
//   c.moveTo(startX+21.5, startY);
//   c.arcTo(startX, startY, startX, startY+11.5, radius);
//   c.arcTo(startX, startY+22.5, startX, startY+22.5, 0);
//   c.strokeStyle = "blue";
//   c.lineWidth = 3;
//   c.stroke();
// };
// leftTopCurve(160, 0);
//
// // top-right curve
// const rightTopCurve = (startX, startY) => {
//   c.fillStyle = "#000";
//   let radius = 10;
//   c.fillRect (startX, startY, 21.5, 22.5);
//   c.beginPath();
//   c.moveTo(startX, startY);
//   c.arcTo(startX+22, startY, startX+22, startY+11.5, radius);
//   c.arcTo(startX+22, startY+22.5, startX+22, startY+22.5, 0);
//   c.strokeStyle = "blue";
//   c.lineWidth = 3;
//   c.stroke();
// };
// rightTopCurve(200, 0);
//
// // bottom-left curve
// const rightBottomCurve = (startX, startY) => {
//   c.fillStyle = "#000";
//   let radius = 10;
//   c.fillRect (startX, startY, 21.5, 22.5);
//   c.beginPath();
//   c.moveTo(startX-1, startY+21.5);
//   c.arcTo(startX+21.5, startY+21.5, startX+21.5, startY+11.5, radius);
//   c.arcTo(startX+21.5, startY, startX+21.5, startY, 0);
//   c.strokeStyle = "blue";
//   c.lineWidth = 3;
//   c.stroke();
// };
// rightBottomCurve(240, 0);
//
// // bottom-left curve
// const leftBottomCurve = (startX, startY) => {
//   c.fillStyle = "#000";
//   let radius = 10;
//   c.fillRect (startX, startY, 21.5, 22.5);
//   c.beginPath();
//   c.moveTo(startX, startY);
//   c.arcTo(startX, startY+23, startX+10, startY+23, radius);
//   c.arcTo(startX+22, startY+23, startX+22, startY+23, 0);
//   c.strokeStyle = "blue";
//   c.lineWidth = 3;
//   c.stroke();
// };
// leftBottomCurve(280, 0);
//
// const empty = (startX, startY) => {
//   c.fillStyle = "#000";
//   c.fillRect (startX, startY, 21.5, 22.5);
// };
// empty(0, 0);
// //
// // const border = (startX, startY) => {
// //   c.fillStyle = "#fff";
// //   c.fillRect (startX, startY, 21.5, 22.5);
// // };
// // border(0, 0);
//
// leftTopCurve(21.5, 22.5);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// //
