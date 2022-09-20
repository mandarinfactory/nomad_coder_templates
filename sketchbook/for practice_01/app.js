const sketchbook = document.querySelector("canvas");

const context = sketchbook.getContext("2d")
// context --> sketchbook에 그릴때 사용하는 붓이라고 생각하면 쉽다! //
sketchbook.width = 1000;
sketchbook.height = 1000;
// 그리기를 시작할때 width와 height는 CSS가 아닌 JS에서만 수정하도록 한다! --> image의 질을 위해서! //

context.rect(50, 50, 100, 100);
context.rect(100, 100, 100, 100);
context.fill();
// context.fillStyle로 색상을 변경하게 되면 같은 경로 위에 있는 같은 element이므로 50,100,150에 있는 모든 사각형들의 색이 변한다. //

context.beginPath();
// 하지만, beginPath를 사용해서 위 context.fill로 부터 다른 경로임을 표시하게 되므로 개별적으로 나오게 된다. //
context.rect(150, 150, 100, 100);
context.rect(200, 200, 100, 100);
context.fill();
// fillRect-->context는 붓이라고 생각하면 된다. + Rect은 사각형을 말함. (x축, y축, width, height)순으로 써있다. //
// fill은 단색으로 채우는것, stroke는 선으로만 그어지는것, //
// (0,0 --> body 가장 왼쪽위를 기준으로 생각하면 쉽다.)을 기준으로 x,y축으로 150씩 가서 가로 100, 세로 100의 사각형을 칠해라. 라는 뜻이다. //
// context.fill을 5000ms(5초)후에 실행시킨다. --> setTimeout(() => {context.fil();}, 5000);의 기능이다. //

context.beginPath();
context.moveTo(50, 50);
// context === 붓이라고 생각하자! --> context를 x축50, y축 50으로 이동시킨다.(moveTo) //
context.lineTo(300, 50);
//(50, 50)을 기준으로 x축 200만큼 선을 긋는다.(y축은 같은 50이므로 다른점 X) --> lineTo(200, 50) //
context.lineTo(300, 300);
context.lineTo(50, 300);
context.lineTo(50, 50);
context.stroke();
// rect는 사각형을 만드는 shortcut이고 lineTo를 통해 일일히 그릴수도 있다. //

// MAKE THE HOUSE //
context.beginPath();
context.fillRect(500, 500, 50, 200);
context.fillRect(700, 500, 50, 200);
context.fillRect(600, 600, 50, 100);
context.fillRect(500, 500, 200, 30);
context.moveTo(500, 500);
context.lineTo(620, 350);
context.stroke();
context.lineTo(750, 500);
context.fill();

context.beginPath();
context.fillRect(120, 500, 15, 100)
context.fillRect(280, 500, 15, 100)
context.fillRect(180, 500, 60, 200)
context.arc(210, 430, 60, 0, 2 * Math.PI);
// context.arc(x축, y축, 원의 크기, 시작지점, 끝나는지점 * Math.PI) --> 원을 그리는 방법 //
// 시작지점은 1사분면의 +x축 바닥(0.0)에서 시작해서 시계방향으로 0.5(-y축바닥), 1.0(-x축바닥), 1.5(+y축바닥), 2.0(===0.0)으로 되돌아온다. //
context.fill();

context.beginPath();
context.fillStyle = "yellowgreen";
context.arc(240, 400, 10, 0 ,2 * Math.PI);
context.arc(200, 400, 10, 0 ,2 * Math.PI);
context.fill();

context.beginPath();
context.fillStyle = "white";
context.arc(210, 430, 40, 0, 1* Math.PI);
context.fill();