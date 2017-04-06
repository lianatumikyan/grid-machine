'use strict';
(function IIFE() {
    var board = {
        form: null,
        primary: null,
        line : 0,
        colBtn : null,
        item : 0,
        li : null
    };

    function init() {
        board.form = document.getElementById('infoForm');
        board.primary = document.getElementById('continer');
        board.li = document.getElementsByClassName('contineDiv');
        board.colBtn = document.getElementById('coloring');
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
       if (board.colBtn.addEventListener){
            board.colBtn.addEventListener('click', colorSetInterval);
        }else if (board.colBtn.attachEvent){
           board.colBtn.attachEvent('onclick', colorSetInterval);
       }
    }

    function cleanContiner() {
        board.primary.innerHTML = '';
    }

    function cleanInput() {
        document.getElementById('inputNum').innerHTML = '';
    }

    function drawGrid(e) {
        clearInt();
        e.preventDefault();
        var number = parseInt(document.getElementById('inputNum').value);
        if (isNaN(number)) {
            alert('Please enter only number');
            return;
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

    var interval;
    function coloring() {
        if(board.primary.innerHTML == ''){
            alert('please first create gride before coloring it');
            clearInterval(interval);
            return;
        }
        var red = Math.round(Math.random() * 255);
        var green = Math.round(Math.random() * 255);
        var blue = Math.round(Math.random() * 255);
        var inLine = board.li[board.line].getElementsByClassName('divInLine');
        inLine[board.item].style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue +')';
        board.line++;
        if (board.line == inLine.length) {
            board.line = 0;
            board.item++;

        }
        if (board.item == inLine.length) {
            clearInt();
        }
    }
    function colorSetInterval() {
       clearInt();
        interval = setInterval(coloring, 1000);
    }
    function clearInt() {
    }



    if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', init, false);
    }
    else {
        document.attachEvent('onDOMContentLoaded', init);
    }

})();

