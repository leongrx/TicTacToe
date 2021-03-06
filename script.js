"use strict"

let fields = [];
let currentShape = 'cross';

function fillShape(id) {
    if(currentShape == 'cross') {
        currentShape = 'circle';
    } else {
        currentShape = 'cross';    
    }
    fields[id] = currentShape;
    draw();
    chekForWin();
}

function draw() {
    for(let i = 0; i < fields.length; i++) {
        if(fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }
        if(fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
    }
}

function chekForWin() {
    let winner;
    if(fields[0] == fields[1] && fields[1] == fields[0] && fields[0]) {
        winner = fields[0];
    }
    if(fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
    }
    if(fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
    }
    if(fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
    }
    if(fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
    }
    if(fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
    }
    if(fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
    }
    if(fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
    }
    if(winner) {
        console.log('Gewonnen', winner);
    }
}