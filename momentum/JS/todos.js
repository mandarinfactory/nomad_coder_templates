const todoForm = document.querySelector("#todo-form");
const todoWrittenInput = todoForm.querySelector("input"); 
const todoList = document.querySelector("#todo-list");

function deleteTodoButton(event) {
    const list = event.target.parentElement;
    list.remove();
}
// event.target은 해당 event가 지정되어서(target) parentElement로 해당값의 parent를 알려줌. //
// 위 list와 아래 list는 서로 충돌하지 않는다. --> function이 하나 끝나게 되면 서로 영향을 받지 않는다. //
// 지역변수(local Variable)은 {중괄호}로 나타내고, 한 지역내에서만 사용할 수 있는 변수이다. --> 그러한 변수는 그 지역내에서만 정의된다.(function같은) =/= 전역변수(global Variable) //
function paintTodo(newTodo) {
    const list = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button")
    button.innerText = "X";
    button.addEventListener("click", deleteTodoButton);
    list.appendChild(span);
    list.appendChild(button);
    todoList.appendChild(list);
}
// 1. 위에서 가져온 newTodo(이미 user가 submit해서 todoForm에 입력된값이 저장된 element)를 저장하는것. //
// 2. createElement로 JS --> HTML에 li와 span을 생성하고 생성된 span을 appendChlild로 li안에 append한다. //
// 3. 만들어진 span innerText에 newTodo를 인식시킨다. //
// 4. list(span)에 저장된 user의 submit값을 appendChild로 todoList에 append해서 browser에 보여준다. + list로 button을 append해준다. //
// 5. createElement로 button 생성 후, button에 'X'표 설정하고 addEventListener로 click하면 deleteTodoButton function 활성화 하게 한다. //
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = todoWrittenInput.value; 
    todoWrittenInput.value = "";
    paintTodo(newTodo);
};
todoForm.addEventListener("submit", handleToDoSubmit);
// intro.js와 많이 비슷하다. 헷갈려서 하는 RECAP! //
// 1. todoForm에 user가 submit(addEventListener)하면 그 input은 todoWrittenInput으로 출력된다. //
// 2. console.log(todoWrittenInput.value)하면 해당 input값이 출력된다. //
// 3. 해당 input값은 newTodo로 element화 하고, todoWrittenInput값은 null("")이 된다. --> submit하고 form을 빈칸으로 만들어야하므로! //
// 4. 빈칸 만들기전에 이전에 user가 submit한 값은 저장해야하므로 newTodo로 null만들기전에 저장해놓는다. //
// 5. 따라서 console.log(newTodo, todoWrittenInput.value); 하게 되면 user가 submit한 값 + null된 값이 같이 출력된다. //
// 6. todoWrittenInput이 후에 null이 되었다고 해서 newTodo까지 null이 되지 않는다. //\
