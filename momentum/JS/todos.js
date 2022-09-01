const todoForm = document.querySelector("#todo-form");
const todoWrittenInput = todoForm.querySelector("input"); 
const todoList = document.querySelector("#todo-list");

function handleToDoSubmit(event) {
    event.preventDefault();
    console.log(todoWrittenInput.value);
    const newTodo = todoWrittenInput.value; 
    todoWrittenInput.value = "";
    console.log(newTodo, todoWrittenInput.value);
};
todoForm.addEventListener("submit", handleToDoSubmit);
// intro.js와 많이 비슷하다. 헷갈려서 하는 RECAP! //
// 1. todoForm에 user가 submit(addEventListener)하면 그 input은 todoWrittenInput으로 출력된다. //
// 2. console.log(todoWrittenInput.value)하면 해당 input값이 출력된다. //
// 3. 해당 input값은 newTodo로 element화 하고, todoWrittenInput값은 null("")이 된다. --> submit하고 form을 빈칸으로 만들어야하므로! //
// 4. 빈칸 만들기전에 이전에 user가 submit한 값은 저장해야하므로 newTodo로 null만들기전에 저장해놓는다. //
// 5. 따라서 console.log(newTodo, todoWrittenInput.value); 하게 되면 user가 submit한 값 + null된 값이 같이 출력된다. //
// 6. todoWrittenInput이 후에 null이 되었다고 해서 newTodo까지 null이 되지 않는다. //
