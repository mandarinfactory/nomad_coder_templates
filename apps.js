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


// RECAP - ASSIGNMENT(revised to console.log/alert --> return) //
const calculation = {
    plus : function(a, b){
        return a + b;
    },
    minus : function(a, b){
        return a - b;
    },
    divide : function(a, b){
        return a / b;
    },
    multiple : function(a, b){
        return a * b;
    },
};
const plusResult = calculation.plus(6, 130);
const minusResult = calculation.minus(plusResult, 107);
const divideResult = calculation.divide(52, minusResult);
const multipleResult = calculation.multiple(divideResult, plusResult);
// 이렇게 return을 쓰면 console에서의 값을 자유자재로 쓸 수 있다. (전에는 funciton내부에 있어서 출력값만 봤어야함.) //
// console.log를 따로 쓰지 않고 콘솔창에 var값을 출력해도 값은 그대로 나온다. //


// 5. return //
const age = 109;
// return은 function내부에 console.log를 넣지 않고 외부에서(screen그외) 볼 수 있도록 해준다. //
function calculationKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}
// ageOfForeigner = age = 109, return 109 + 2 = 111 = calculationKrAge //
// return을 함으로써, function을 호출하는 코드가 111이 된다. = calculationKrAge //
const krAge = calculationKrAge(age);
// age = 109, return으로 인해 calculationKrAge = 111 = krAge //
console.log(krAge);
// krAge = 111 //
// RECAP - return은 어려운 부분!!! //
const calAdd = {add:function(first, next)
    {return first + next;},
};
// 이때 console.log(first + next)로 하면 값은 콘솔에 출력되지만, return이 없으므로 calAddResult로는 값이 나오지 않는다. //
// 하지만, return first + next로 하면 콘솔창에는 안나오지만, calAddResult로 하면 값이 나온다. = 7 + 89(calAdd.add) = 96 //
const calAddResult = calAdd.add(7, 89);




// 6. conditonals //
// true/false를 판별하게 해주는 명령어이다. //
const youngAge = parseInt(prompt("How old are you?"));
// prompt는 사용자에게 "string"팝업을 띄우게 함. --> 응답할때까지 JS를 멈추게 하고, 현재는 많이 쓰지 않는다. 스타일이 별로이고 CSS로 수정안됨. //
console.log(typeof "150", typeof 150);
console.log(youngAge);
// typeof는 string이나 number type을 판별해서 출력해준다. //
// parseInt는 string을 number로 변환시켜주는 function 이다. --> string에 문자로 쓰면 NaN으로 출력된다. //
