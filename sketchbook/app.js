const sketchbook = document.querySelector("canvas");

const context = sketchbook.getContext("2d")
// context --> sketchbook에 그릴때 사용하는 붓이라고 생각하면 쉽다! //
sketchbook.width = 1000;
sketchbook.height = 1000;
// 그리기를 시작할때 width와 height는 CSS가 아닌 JS에서만 수정하도록 한다! --> image의 질을 위해서! //

context.rect(50, 50, 100, 100);
context.rect(150, 150, 100, 100);
context.rect(250, 250, 100, 100);
context.fill();
context.rect(350, 350, 100, 100);
context.fillStyle = "orangered";
context.fill();
// fillRect-->context는 붓이라고 생각하면 된다. + Rect은 사각형을 말함. (x축, y축, width, height)순으로 써있다. //
// fill은 단색으로 채우는것, stroke는 선으로만 그어지는것, //
// (0,0 --> body 가장 왼쪽위를 기준으로 생각하면 쉽다.)을 기준으로 x,y축으로 50씩 가서 가로 100, 세로 100의 사각형을 칠해라. 라는 뜻이다. //
// context.fillStyle로 색상을 변경하게 되면 같은 경로 위에 있는 같은 element이므로 50,150,250,350에 있는 모든 사각형들의 색이 변한다. //
// 첫번째 fill에서는 50,150,250만 나오고 두번째 fill에서 색이 변함 + 350 사각형까지 같이 나온다. //