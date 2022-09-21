const sketchbook = document.querySelector("canvas");

const context = sketchbook.getContext("2d")
// context --> sketchbook에 그릴때 사용하는 붓이라고 생각하면 쉽다! //
sketchbook.width = 1000;
sketchbook.height = 1000;
// 그리기를 시작할때 width와 height는 CSS가 아닌 JS에서만 수정하도록 한다! --> image의 질을 위해서! //
context.lineWidth = 2;
let paintNow = false;
// paintNow를 false로 해서 바로 그릴수 없게 한다. --> cursor를 눌러야 그림을 그릴수 있게끔! //

function onMovePaint (event) {
    if(paintNow) {
        context.lineTo(event.offsetX, event.offsetY);
        context.stroke();
        return;
    }
    // true로 온 paintNow는 moveTo(offsetX,Y)에서 바로 lineTo(offsetX,Y)로 바뀌게 된다. //
    // 다시말해, cursor가 움직이는대로 선이 그어지게 설정되어 있다. + context.stroke(); //
    // return은 function실행을 종료하고, 호출 지점으로 반환시킨다. //
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
    
sketchbook.addEventListener("mousemove", onMovePaint);
sketchbook.addEventListener("mousedown", onMouseDown);
sketchbook.addEventListener("mouseup", onMouseUp);
// mousemove는 커서의 움직임, mousedown은 클릭, mouseup은 클릭을 멈춤 //
