'use strict';
(function IIFE() {
    var board = {
        form: null,
        mainDiv: null,
        inputValue: null,
        parsedNum: null
    };

    function init() {
        board.form = document.getElementById('infoForm');
        board.mainDiv = document.getElementById('continer');
        board.inputValue = document.getElementById('inputNum');
        bindEvents();
    }

    function bindEvents() {
        board.form.addEventListener('submit', function (e) {
            e.preventDefault();
            drawGrid();
        });
    }

    function cleaner() {
        board.mainDiv.innerHTML = '';
        board.inputValue.value = '';

    }

    function drawGrid() {
        board.parsedNum = parseInt(document.getElementById('inputNum').value);
        cleaner();
        if (isNaN(board.parsedNum)) {
            alert('Please enter only number');
            return;
        }

        for (var i = 0; i < board.parsedNum; i++) {
            var lineDiv = document.createElement('div');
            board.mainDiv.appendChild(lineDiv);
            lineDiv.className = 'contineDiv';
            for (var j = 0; j < board.parsedNum; j++) {
                lineDiv.innerHTML += '<div class="divInLine"></div>';

            }
        }

    }

    init();
})();

