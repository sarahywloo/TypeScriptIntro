'use strict';
/*
//return random number between 1 to 10
function getRandomInteger() {
    return Math.floor(Math.random() * 10 + 1);
}

let randomNum = getRandomInteger();

//for loop that gives user 3 tries to guess the integer
for (let i = 0; i < 3; i++) {
    let guessNum = parseInt(prompt('Guess an integer from 1 to 10.'));
    if (guessNum === randomNum) {
        alert('You got it!');
        break;
    }
    else if (guessNum <= randomNum + 2 && guessNum >= randomNum - 2) {
        alert('Close!');
    }
    else {
        alert('You got it wrong!');
    }
}
*/
/*
let userWin = false;
while (!userWin) {
    let guessNum = parseInt(prompt('Guess an integer from 1 to 10.'));
    if (guessNum === randomNum) {
        alert('You got it!');
        userWin = true;
    }
    else if ((guessNum < randomNum && guessNum >= randomNum - 2) || (guessNum > randomNum && guessNum <= randomNum + 2)) {
        alert('Close!');
    }
    else {
        alert('You got it wrong!');
    }
}

*/
//Math.random gives a number between 0 and 1
//Math.floor(Math.random()* 10)
