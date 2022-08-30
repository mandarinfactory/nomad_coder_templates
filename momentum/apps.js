const loginForm = document.querySelector(".login-form");
// querySelector로 볼때는 class(.), id(#)를 꼭 표시해줘야한다. //
// querySelector가 아닌 getElementById로도 사용 가능하다. 이때는 따로 표시할 필요 없다. //
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
// loginForm 또한 HTML element이므로(<div class="login-form">을 element화한 이름이다.) document가 아닌 loginForm으로 검색이 가능하다. //
// === 좀더 정밀 조사가 가능하다. //
function onLoginButtonClick(){
    console.dir(loginInput.value);
}
loginButton.addEventListener("click",onLoginButtonClick);