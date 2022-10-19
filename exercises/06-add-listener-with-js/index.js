window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
};

//the listener function here
let boton = document.getElementById("theGreen");
boton.addEventListener("click", () => {
    alert("Hello World");
})
