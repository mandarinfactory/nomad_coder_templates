const sketchbook = document.querySelector("canvas");
const modeBtn = document.querySelector("#mode-btn");
const destroyBtn = document.querySelector("#destroy-btn");
const eraserBtn = document.querySelector("#eraser-btn");
const colorOption = Array.from(document.querySelectorAll(".color-option"));
// querySelectorAll로 가져온건 HTMLCollection이므로 Array.from으로 Array로 묶어준다. //
// array.from --> element들을 복사해 새로운 array객체로 만들어준다. //
const lineWidth = document.querySelector("#line-width");
const colorPaint = document.querySelector("#color");
const context = sketchbook.getContext("2d")
// context --> sketchbook에 그릴때 사용하는 붓이라고 생각하면 쉽다! //
const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 1000;

sketchbook.width = CANVAS_WIDTH;
sketchbook.height = CANVAS_HEIGHT;
// 그리기를 시작할때 width와 height는 CSS가 아닌 JS에서만 수정하도록 한다! --> image의 질을 위해서! //
context.lineWidth = lineWidth.value;
let paintNow = false;
// paintNow를 false로 해서 바로 그릴수 없게 한다. --> cursor를 눌러야 그림을 그릴수 있게끔! //
let fillNow = false;

function onMovePaint (event) {
    if(paintNow) {
        context.lineTo(event.offsetX, event.offsetY);
        context.stroke();
        return;
    }
    // true로 온 paintNow는 moveTo(offsetX,Y)에서 바로 lineTo(offsetX,Y)로 바뀌게 된다. //
    // 다시말해, cursor가 움직이는대로 선이 그어지게 설정되어 있다. + context.stroke(); //
    // return은 function실행을 종료하고, 호출 지점으로 반환시킨다. //
    context.beginPath();
    // user가 cursor를 움직일때마다 새로운path로 끊어줘야한다. --> onLineWidthChange로 이전에 그은 선까지 같이 update 방지! //
    context.moveTo(event.offsetX, event.offsetY);
    // addEventListener(mousemove)로 --> context.moveTo를 이용해 현재 cursor가 있는 위치로 context 위치 시킴 =/= 그려지는건 아님. //
    // false가 나오면 다시 moveTo로 넘어와 moveTo만 하게 된다. //
}
function onMouseDown () {
    paintNow = true;
    // mousedown(클릭)을 통해 paintNow가 true로 변환하게 되고 onMovePaint의 if로 넘어가게 된다. //
}
function onMouseUp () {
    paintNow = false;
    // mouseup를 하면 클릭을 놓게 되므로 다시 paintNow는 false로 되돌아 가고 context.moveTo로 context(붓)만 움직이게 된다. //
}

function onLineWidthChange (event) {
    context.lineWidth = event.target.value;
}
// const lineWidth로 묶은걸 addEventListener("change")로 paint화 해서 lineWidth(range)의 움직임이 event된 target.value로 lineWidth(선의 굵기)와 같다고 알려준다. //
function onPaintColor (event) {
    const paintColorValue = event.target.value;
    context.strokeStyle = paintColorValue;
    context.fillStyle = paintColorValue;
    //stroke는 선, fill은 도형을 생각하면 된다! //
}
function onColorClick (event) {
    const onColorValue = event.target.dataset.color;
    // dataset.color === HTML에서 data-color = ""꼴로 나타낸걸 JS에서 가져오는것. --> string에는 각각의 color값이 써있다. //
    context.strokeStyle = onColorValue;
    context.fillStyle = onColorValue;
    colorPaint.value = onColorValue;
    // colorPaint(HTML에서 input type="color"한 element)--> value(현재)값을 onColorValue로 onColorClick한 값과 같은 색을 보여주게끔 한다. //
}
function onModeBtnClick () {
    if(fillNow){
        fillNow = false;
        modeBtn.innerText = "Fill";
    } else {
        fillNow = true;
        modeBtn.innerText = "Draw";
    }
}
function onSketchbookClick () {
    if (fillNow) {
        context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}
function onDestroyBtnClick () {
    context.fillStyle = "white";
    context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}
function onEraserBtnClick () {
    context.strokeStyle = "white";
    fillNow = false;
    modeBtn.innerText = "Fill";
}
    
sketchbook.addEventListener("mousemove", onMovePaint);
sketchbook.addEventListener("mousedown", onMouseDown);
sketchbook.addEventListener("mouseup", onMouseUp);
sketchbook.addEventListener("mouseleave", onMouseUp);
// mousemove는 커서의 움직임, mousedown은 클릭, mouseup은 클릭을 멈춤, mouseleave 아예 마우스를 뗌 //
sketchbook.addEventListener("click", onSketchbookClick);

lineWidth.addEventListener("change", onLineWidthChange);
// 선의 굵기 변경 //
colorPaint.addEventListener("change", onPaintColor);
// 선(strokeStyle), 도형(fillStyle)의 색 변경 //

colorOption.forEach(color => color.addEventListener("click", onColorClick));
// data-color의 color를 뜻한다. --> 각각의 browser에 보이는 color들을 click하면 onColorClick function을 활성화 한다. //

modeBtn.addEventListener("click", onModeBtnClick);
destroyBtn.addEventListener("click", onDestroyBtnClick);
eraserBtn.addEventListener("click", onEraserBtnClick);
