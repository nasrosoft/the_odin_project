
let poss1 = document.getElementById('1'),
    poss2 = document.getElementById('2'),
    poss3 = document.getElementById('3'),
    poss4 = document.getElementById('4'),
    poss5 = document.getElementById('5'),
    poss6 = document.getElementById('6'),
    poss7 = document.getElementById('7'),
    poss8 = document.getElementById('8'),
    poss9 = document.getElementById('9'),
    div = document.createElement('div'),
    gameBoard = {
        test : ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
        xboard : ['X', 'X', 'X', 'X', 'X'],
        player : (() => {})()
}
const player1 = {
    oboard : ['O', 'O', 'O', 'O', 'O'],
    startPlay  : (() => {})(),
    gameState : ["win","loser"]
}
const player2 = {
    oboard : ['X', 'X', 'X', 'X', 'X'],
    startPlay  : (() => {})(),
    gameState : ["win","loser"]
}
/* player Win Probability :
[  0   1   2]
-------------
[  3   4   5]
-------------
[  6   7   8]
                08 case Win the player : [0 1 2, 3 4 5, 6 7 8, 0 3 6, 1 4 7, 2 5 8, 0 4 8, 2 4 6] 

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
            poss1.appendChild(div).innerHTML = 'X';
        }
        poss2.onclick = function() {
            poss2.appendChild(div).innerHTML = 'X';
        }
        poss3.onclick = function() {
            poss3.appendChild(div).innerHTML = 'X';
        }
        poss4.onclick = function() {
            poss4.appendChild(div).innerHTML = 'X';
        }
        poss5.onclick = function() {
            poss5.appendChild(div).innerHTML = 'X';
        }
        poss6.onclick = function() {
            poss6.appendChild(div).innerHTML = 'X';
        }
        poss7.onclick = function() {
            poss7.appendChild(div).innerHTML = 'X';
        }
        poss8.onclick = function() {
            poss8.appendChild(div).innerHTML = 'X';
        }
        poss9.onclick = function() {
            poss9.appendChild(div).innerHTML = 'X';
        }
        

 console.log(playerWin);
