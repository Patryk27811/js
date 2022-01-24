tablicajs = [];

var input = document.getElementById("inputText");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        add();
    }
})