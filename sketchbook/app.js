const sketchbook = document.querySelector("canvas");
const fileInput = document.querySelector("#file");
const textInput = document.querySelector("#text");
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
context.lineCap = "round";
// context를 보다 동그랗게(round) 만들어준다. --> butt(남김없이 딱 끊김),round,square이 있다. //
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
        // fill모드에서 user가 click을 하면 fill모드를 멈추고(false) draw모드로 변하고 modeBtn은 "Fill"로 변한다. --> 그리기(draw)모드 //
    } else {
        fillNow = true;
        modeBtn.innerText = "Draw";
        // 반대로 draw모드에서 click을 하면 draw모드를 멈추고(false) fill모드로 변하고 modeBtn은 "draw"로 변하게 된다. --> 채우기(fill)모드 //
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
    // Eraser를 활성화하려면 일단 fill모드가 아닌 draw모드여야 하므로 fillNow = false + innerText = "Fill"을 통해 작업을 해놔야한다. //
}
function onFileChange (event) {
    const file = event.target.files[0];
    // event된 files의 첫번째 file을 const화 한다. //
    const url = URL.createObjectURL(file);
    // 해당 file의 URL을 알기위해 createobjectURL로 URL을 가져온다. //
    const image = new Image();
    // HTML의 image를 만드는법은 new Image(width, height)로 만들 수 있다. //
    image.src = url;
    // image의 src는 url로 함으로써 user가 browser에 가져온 image를 쓸 수 있게 해준다. //
    image.onload = function () {
        context.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        // addEventListener를 쓰는 대신에 element.on-을 붙여서도 쓸 수 있다. //
        // drawImage(해당image, x좌표, y좌표, width, height)는 sketchbook에 image를 그려준다. //
        fileInput.value = null;
        // 이미 drawImage가 있으므로 user가 다른 image를 원할수 있으니 fileInput을 null상태로 만들어 놓는다. //
    };
}

function onDoubleClick (event) {
    context.save();
    //save --> 현재상태, 색상, 스타일 등 모든 것을 저장해준다. //
    const text = textInput.value;
    context.lineWidth = 5;
    // text가 context굵기가 굵어서 잘 안보여서 lineWidth = 1로 해놓고, 이전에 save되어있는걸 다시 restore로 되돌려 놓는다. //
    context.font = "50px Ubuntu";
    context.strokeText(text, event.offsetX, event.offsetY);  
    //offsetX, Y는 mouse가 클릭한 sketchbook의 내부 좌표이다. // 
    context.restore();
    // 수정을 완료하면 restore을 써주면 된다. --> 기존의 저장한 checkpoint로 돌아간다. //
}

sketchbook.addEventListener("dblclick", onDoubleClick);
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

fileInput.addEventListener("change", onFileChange);
