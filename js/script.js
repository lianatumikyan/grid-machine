'use strict';
(function IIFE() {
    var board = {
        form: null,
        primary: null,
        line: 0,
        item: 0,
        colBtn: null,
        lineContiner: null,
        isRuning: false,
        interval: null
    };

    function init() {
        board.form = document.getElementById('infoForm');
        board.primary = document.getElementById('continer');
        board.lineContiner = document.getElementsByClassName('contineDiv');
        board.colBtn = document.createElement('input');
        bindEvents();
    }

    function bindEvents() {
        if (board.form) {
            if (board.form.addEventListener) {
                board.form.addEventListener('submit', drawGrid, false)
            } else if (board.form.attachEvent) {
                board.form.attachEvent('onsubmit', drawGrid);
            }
        }
        if (board.colBtn) {
            console.log("liancho");
            if (board.colBtn.addEventListener) {
                board.colBtn.addEventListener('click', colorSetInterval);
            } else if (board.colBtn.attachEvent) {
                board.colBtn.attachEvent('onclick', colorSetInterval);
            }
        }
    }

    function cleanContiner() {
        board.primary.innerHTML = '';
    }

    function cleanInput() {
        document.getElementById('inputNum').innerHTML = '';
    }

    function drawGrid(e) {
        if (board.isRuning) {
            clearInt();
        }
        e.preventDefault();
        var number = parseInt(document.getElementById('inputNum').value);
        if (isNaN(number)) {
            alert('Please enter only number');
            return;
        }
        if (board.primary.innerHTML == '') {
            board.form.appendChild(board.colBtn);
            board.colBtn.value = 'Colorize';
            board.colBtn.type = 'button';
        }
        cleanContiner();
        for (var i = 0; i < number; i++) {
            var lineDiv = document.createElement('div');
            board.primary.appendChild(lineDiv);
            lineDiv.className = 'contineDiv';
            for (var j = 0; j < number; j++) {
                lineDiv.innerHTML += '<div class="divInLine"></div>';
            }
        }
        cleanInput();
    }

    function colorSetInterval() {
        if (board.isRuning) {
            return;
        }
        board.interval = setInterval(colorize, 1000);
    }

    function colorize() {
        var inLineContiner = board.lineContiner[board.line].getElementsByClassName('divInLine');
        inLineContiner[board.item].style.backgroundColor = choseColor();
        board.line++;
        if (board.line == inLineContiner.length) {
            board.line = 0;
            board.item++;
        }
        if (board.item == inLineContiner.length) {
            clearInt();
        }
        board.isRuning = true;
    }

    function choseColor() {
        var red = Math.round(Math.random() * 255);
        var green = Math.round(Math.random() * 255);
        var blue = Math.round(Math.random() * 255);
        return 'rgb(' + red + ',' + green + ',' + blue + ')';
    }

    function clearInt() {
        board.item = 0;
        board.line = 0;
        board.isRuning = false;
        clearInterval(board.interval);
    }

    if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', init, false);
    }
    else {
        document.attachEvent('onDOMContentLoaded', init);
    }

})();

