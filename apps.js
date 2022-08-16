// FOR PRACTICING THE JAVA-SCRIPT //


// 1. basic //
const a = 5;
let b = 7;
console.log(a + b);
b = 81;
console.log(a + b);
// 만약 a = 12;를 한다면 --> console.log를 하면, 오류가 뜬다. //
b = 67;
console.log(a + b);
// const는 직접 변수를 바꿔야하고 let은 변수를 후에 따로 바꿀 수 있다. //
// var는 지금은 쓰지 않는다. --> 언어를 통한 보호가 어렵기 때문(잘못 써도 브라우저가 그냥 인식한다.) //
// 일반적으로는 const를 쓰고 업데이트 할 언어만 let을 사용하고 var는 쓰지 않는다.//
// boolean = true / false 참, 거짓만을 연산하는 계산법이다. //
// null = bunch of nothingness(무상태) =/= false //
// undefined = var을 만들기는 했는데, 값이 없음. (let a;)//


// 2.array //
const dayOfWeek = ["monday", "tuesday", "wednesday", "thursday", "friday"]
// array는 가장 기본적으로 data를 나열하는 방법이다. 대괄호[]를 이용해서 나타낸다. //
console.log(dayOfWeek);
// 컴퓨터의 숫자의 시작은 0이다. --> 첫번째는 컴퓨터 기준에서 0이라고 볼 수 있다. 0 = "monday" //
console.log(dayOfWeek[0]);
// console.log(var[number]) --> number를 지칭해서 해당 배열 내 특정 변수를 출력할 수 있다. //
dayOfWeek.push("saturday", "sunday");
// push를 통해 var에 추가적으로 data를 넣을 수 있다. --> 순서는 끝부분으로 온다. //
console.log(dayOfWeek);
console.log(dayOfWeek[6]);


// 3. object //
const profileOfMe = {
    name : "mandarinfactory",
    height : 170,
    weight : 77,
    sex : "male",
};
// object는 시작을 중괄호{}로 해야하고 항상 마지막에 ,를 붙인다. //
console.log(profileOfMe.name);
console.log(profileOfMe.sex);
profileOfMe.name = "tigerlily";
profileOfMe.location = "Bucheon";
console.log(profileOfMe);
console.log("Hello my name is " + profileOfMe.name + ". and I'm live in " + profileOfMe.location);
// object는 직접 내부 data를 변경하거나 다른 data를 추가할 수 있다. //


// 4. function //
function toBuyToday (goodsInMarket) {
    console.log(goodsInMarket);
};
toBuyToday("orange");
function plus (pizza, potato) {
    console.log(pizza + potato);
};
plus(78, 124);
// function은 계속 반복해서 사용할 수 있는 코드조각이다. --> 어떤 코드를 캡슐화해서 실행을 여러번 할 수 있다.
// ( )괄호는 data내 어떤걸 가져올지 기록하는 곳, 실행이 이루어질 곳이다. 꼭 써야함! //
// goodsInMarket이나 pizza/potato 자리는 바뀌어도 된다. --> placeholder이므로 큰 문제 없음!//
// { }중괄호는 data 자리 //


// RECAP - ASSIGNMENT //

const calculation = {
    plus : function(a, b){
        console.log(a + b);
    },
    minus : function(a, b){
        console.log(a - b);
    },
    divide : function(a, b){
        console.log(a / b);
    },
    multiple : function(a, b){
        console.log(a * b);
    },
};
calculation.plus(64, 143);
calculation.minus(900, 873);
calculation.divide(7132, 159);
calculation.multiple(71, 121);
