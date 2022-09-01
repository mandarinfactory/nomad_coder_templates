const todoForm = document.querySelector("#todo-form");
const todoWrittenInput = todoForm.querySelector("input"); 
const todoList = document.querySelector("#todo-list");

function paintTodo(newTodo) {
    const list = document.createElement("li");
    const span = document.createElement("span");
    list.appendChild(span);
    span.innerText = newTodo;
    todoList.appendChild(list);
}
// 1. 위에서 가져온 newTodo(이미 user가 submit해서 todoForm에 입력된값이 저장된 element)를 저장하는것. //
// 2. createElement로 JS --> HTML에 li와 span을 생성하고 생성된 span을 appendChlild로 li안에 append한다. //
// 3. 만들어진 span innerText에 newTodo를 인식시킨다. //
// 4. list(span)에 저장된 user의 submit값을 appendChild로 todoList에 append해서 browser에 보여준다. //
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
