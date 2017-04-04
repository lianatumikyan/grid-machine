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
        if (board.form) {
            if (board.form.addEventListener) {
                board.form.addEventListener('submit', function (e) {
                    drawGrid(e);
                    e.preventDefault();
                })
            } else if (board.form.attachEvent) {
                board.form.attachEvent('onsubmit', drawGrid);
            }

        }
    }

    function cleaner() {
        board.primary.innerHTML = '';
        board.inInput.value = '';
    }

    function drawGrid(e) {
        var parsedNum = parseInt(board.inInput.value);
        if (isNaN(parsedNum)) {
            alert('Please enter only number');
            return;
        }
        cleaner();
        for (var i = 0; i < parsedNum; i++) {
            var lineDiv = document.createElement('div');
            board.primary.appendChild(lineDiv);
            lineDiv.className = 'contineDiv';
            for (var j = 0; j < parsedNum; j++) {
                lineDiv.innerHTML += '<div class="divInLine"></div>';
            }
        }
    }

    if (window.addEventListener) {
        window.addEventListener('DOMContentLoaded',function (e) {
            return;
        })
    }else{
        alert('Dom content is not loaded');
    }

    init();
})();

