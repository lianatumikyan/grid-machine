'use strict';
(function IIFE() {
    var board = {
        form: null,
        primary: null,
        inInput: null,
    };
    function init() {
        board.form = document.getElementById('infoForm');
        board.primary = document.getElementById('continer');
        board.inInput = document.getElementById('inputNum');
        bindEvents();
    }
    function bindEvents() {
        if(board.form.addEventListener){
        board.form.addEventListener('submit', eventCalled);
        }else if(board.form.attachEvent){
            board.form.attachEvent('onsubmit', eventCalled);
        }
        function eventCalled(e){
            e.preventDefault();
            drawGrid();
        }
    }
    function cleaner() {
        board.primary.innerHTML = '';
        board.inInput.value = '';
    }
    function drawGrid() {
         var parsedNum = parseInt(document.getElementById('inputNum').value);
         if(parsedNum != "" || board.primary.innerHTML != ""){
             cleaner();
         }
        if (isNaN(parsedNum)) {
            alert('Please enter only number');
            return;
        }
        for (var i = 0; i < parsedNum; i++) {
            var lineDiv = document.createElement('div');
            board.primary.appendChild(lineDiv);
            lineDiv.className = 'contineDiv';
            for (var j = 0; j < parsedNum; j++) {
                lineDiv.innerHTML += '<div class="divInLine"></div>';
            }
        }
    }
    init();
})();

