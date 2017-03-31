var btn = document.getElementById("draw");
btn.addEventListener("click", function (event) {
    event.preventDefault();
    drawGrid();
});
function drawGrid() {
    var mainDiv = document.getElementById("continer");
    mainDiv.innerHTML = "";
    var input = document.getElementById("inputNum");
    var inpValue =+ input.value;
    if(isNaN(inpValue)){
        alert("Please enter only number")
    }
    for (var i = 0; i < inpValue; i++) {
        var lineDiv = document.createElement("div");
        mainDiv.appendChild(lineDiv);
        lineDiv.className = "contineDiv";
        for (var j = 0; j < inpValue; j++) {
            lineDiv.innerHTML += "<div class='divInLine'></div>"

        }
    }

}

