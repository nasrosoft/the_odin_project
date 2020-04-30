
let poss1 = document.getElementById('1'),
    poss2 = document.getElementById('2'),
    poss3 = document.getElementById('3'),
    poss4 = document.getElementById('4'),
    poss5 = document.getElementById('5'),
    poss6 = document.getElementById('6'),
    poss7 = document.getElementById('7'),
    poss8 = document.getElementById('8'),
    poss9 = document.getElementById('9'),
    div1  = document.createElement('div'),
    div2  = document.createElement('div'),
    div3  = document.createElement('div'),
    div4  = document.createElement('div'),
    div5  = document.createElement('div'),
    div6  = document.createElement('div'),
    div7  = document.createElement('div'),
    div8  = document.createElement('div'),
    div9  = document.createElement('div'),





    gameBoard = {
        test : ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
        xboard : ['X', 'X', 'X', 'X', 'X'],
        player : (() => {})()
}
const player1 = {
    oboard : ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
    startPlay  : (() => {})(),
    gameState : ["win","loser"]
}
const player2 = {
    xboard : ['X', 'X', 'X', 'X', 'X'],
    startPlay  : (() => {})(),
    gameState : ["win","loser"]
}

// [player1,player2] = [player2,player1]


/* player Win logic :

[  0   1   2 ]
-------------
[  3   4   5 ]
-------------
[  6   7   8 ]
                08 case Win the player : [0 1 2, 3 4 5, 6 7 8, 0 3 6, 1 4 7, 2 5 8, 0 4 8, 2 4 6]  .

*/
// const test = ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
playerWin = [
    gameBoard.test[0].concat(gameBoard.test[1]).concat(gameBoard.test[2]),
    gameBoard.test[3].concat(gameBoard.test[4]).concat(gameBoard.test[5]),
    gameBoard.test[6].concat(gameBoard.test[7]).concat(gameBoard.test[8]),
    gameBoard.test[0].concat(gameBoard.test[3]).concat(gameBoard.test[6]),
    gameBoard.test[1].concat(gameBoard.test[4]).concat(gameBoard.test[7]),
    gameBoard.test[2].concat(gameBoard.test[5]).concat(gameBoard.test[8]),
    gameBoard.test[0].concat(gameBoard.test[4]).concat(gameBoard.test[8]),
    gameBoard.test[2].concat(gameBoard.test[4]).concat(gameBoard.test[6])
    
]

    render = () => {

        
    }
            poss1.onclick = function() {
                poss1.appendChild(div1).innerHTML = player1.oboard[0];
            }
            poss2.onclick = function() {
                poss2.appendChild(div2).innerHTML = player1.oboard[1];
            }
            poss3.onclick = function() {
                poss3.appendChild(div3).innerHTML = player1.oboard[2];
            }
            poss4.onclick = function() {
                poss4.appendChild(div4).innerHTML = player1.oboard[3];
            }
            poss5.onclick = function() {
                poss5.appendChild(div5).innerHTML = player1.oboard[4];
            }
            poss6.onclick = function() {
                poss6.appendChild(div6).innerHTML = player1.oboard[5];
            }
            poss7.onclick = function() {
                poss7.appendChild(div7).innerHTML = player1.oboard[6];
            }
            poss8.onclick = function() {
                poss8.appendChild(div8).innerHTML = player1.oboard[7];
            }
            poss9.onclick = function() {
                poss9.appendChild(div9).innerHTML = player1.oboard[8];
            }
        
        

 console.log(playerWin);

//  if(poss1.onclick || poss2.onclick ||
//     poss3.onclick || poss4.onclick ||
//     poss5.onclick || poss6.onclick ||
//     poss7.onclick || poss8.onclick ||
//     poss9.onclick ){
        

//  }