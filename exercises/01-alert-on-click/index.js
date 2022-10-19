window.myClickFunction = function myClickFunction() {
	alert("Your first function!");
};
let input = document.getElementById("button2");
input.addEventListener('click', () => {
	alert("your second function");
})