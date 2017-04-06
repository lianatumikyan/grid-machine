'use strict';
(function IIFE() {
    var board = {
        form: null,
        primary: null,
    };

    function init() {
        board.form = document.getElementById('infoForm');
        board.primary = document.getElementById('continer');
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
    }

    function cleanContiner() {
        board.primary.innerHTML = '';
    }

    function cleanInput() {
        document.getElementById('inputNum').innerHTML = '';
    }

    function drawGrid(e) {
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

    if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', init, false);
    }
    else {
        document.attachEvent('onDOMContentLoaded', init);
    }

})();

