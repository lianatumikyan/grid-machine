'use strict';
(function IIFE (){

    var board = {
        btn:null,
        mainDiv:null,
        inputValue : null

    };

    function init () {

        board.btn = document.getElementById("draw");
        board.mainDiv= document.getElementById('continer');
        board.inputValue = document.getElementById('inputNum');
        bindEvents();
    }


    function bindEvents() {
        board.btn.addEventListener('click', function (e) {
            console.log('click');
            e.preventDefault();
            drawGrid();
        })
    }

function drawGrid() {
        board.mainDiv.innerHTML = "";
        board.inputValue = parseInt(board.inputValue.value);
        console.log(board.inputValue);
        if (isNaN(board.inputValue)) {
            alert('Please enter only number')
        }

    for (var i = 0; i < board.inputValue; i++) {
        var lineDiv = document.createElement('div');
        board.mainDiv.appendChild(lineDiv);
        lineDiv.className = 'contineDiv';
        for (var j = 0; j < board.inputValue; j++) {
            lineDiv.innerHTML += '<div class="divInLine"></div>';

        }
    }
init();
}
init();
}  )();

