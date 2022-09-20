const sketchbook = document.querySelector("canvas");

const context = sketchbook.getContext("2d")
// context --> sketchbook에 그릴때 사용하는 붓이라고 생각하면 쉽다! //
sketchbook.width = 1000;
sketchbook.height = 1000;
// 그리기를 시작할때 width와 height는 CSS가 아닌 JS에서만 수정하도록 한다! --> image의 질을 위해서! //
context.lineWidth = 5;

const vividColors = [
    "#FEA47F",
    "#25CCF7",
    "#EAB543",
    "#55E6C1",
    "#CAD3C8",
    "#F97F51",
    "#1B9CFC",
    "#F8EFBA",
    "#58B19F",
    "#2C3A47",
    "#B33771",
    "#3B3B98",
    "#FD7272",
    "#9AECDB",
    "#D6A2E8",
];

function onClickPaint(event) {
    context.beginPath();
    //beginPath();를 넣음으로써 이전에 mousemove로 된 선들은 다른 색에 영향을 받지 않게 된다! //
    context.moveTo(0, 0);
    // moveTo가 없으면 lineTo만 지금 function에 있으므로 클릭을 두번 해야 선이 생겨서 보이게 된다. //
    const theColors = vividColors[Math.floor(Math.random() * vividColors.length)];
    // 위에서 vividColors로 색을 묶고 vividColors의 length만큼 random을 곱하고 올림(floor)을 해서 정수화한 random값을 paint한다. //
    // 그렇게 되면 random한 vividColor값을 가지는 theColor값이 나온다. //
    context.strokeStyle = theColors;
    // theColor값을 직선의 색으로 출력한다.(strokeStyle) //
    context.lineTo(event.offsetX, event.offsetY);
    // lineTo선 시작은 window가 아닌 sketchbook을 기준으로 해야하므로 offset을 기준으로 잡는다. //
    context.stroke();
    // 항상 lineTo --> stroke를 통해 paint해준다! //
};

sketchbook.addEventListener("mousemove", onClickPaint);
