const clockation = document.querySelector("h2#clock");

function getClockTime() {
    const date = new Date();
    clockation.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
// 이미 console에 new Date는 기본으로 있다. new Date 하면 현재 시각,날짜가 나온다. //
// element화 한 후 `${}`로 묶는다. --> ${}은 표현식 삽입으로 사이에 변수나 연산등을 삽입할 수 있게 되어있다. //
// getHours, Minutes, Secounds등을 다 date로 불러와서 clockation.innerText로 browser에 보이게 나타낸다. //
getClockTime();
// 아래 setInterval로 매1초마다 나오게 하지만, 첫1초는 delay있는걸 바로 function을 실행하게 함으로써 없애준다. //
setInterval(getClockTime, 1000);
// interval --> 매번 일어나야하는 무엇인가를 말한다. && timeout도 비슷하다. //
// setInterval(실행하고자하는 function, 이 function을 몇ms로 할것인가?) //
