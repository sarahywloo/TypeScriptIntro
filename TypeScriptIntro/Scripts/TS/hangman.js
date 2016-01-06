'use strict';
var wordList = ['brunei', 'france', 'spain', 'norway', 'china'];
var run = (Math.floor(Math.random() * wordList.length));
var randomWord = wordList[run];
console.log('Selected word is : ' + randomWord);
var wrongGuesses = 0;
var correctGuesses = 0;
var endGame = false;
var usedLetters = [];
//for (let i = 0; i < wordList.length; i++) {
//}
//push the letter into the guessArray
//guessArray.push(randomWord[i]);
//log the guess array
//console.log(guessArray);
function tryLetter(letter, usedLetters) {
    var isInArray = false;
    for (var i = 0; i < usedLetters.length; i++) {
        if (letter === usedLetters[i]) {
            console.log(letter + ' has already been used');
            isInArray = true;
        }
    }
    if (isInArray == false) {
        usedLetters.push(letter);
    }
    return isInArray;
}
while (!endGame) {
    var guessLetter = prompt('Please enter a letter from A to Z, or click Cancel to stop playing.');
    //check if letter is already in the usedLetters
    var alreadyChosen = tryLetter(guessLetter, usedLetters);
    if (alreadyChosen) {
        continue;
    }
    //checking all letters in randomWord against guessLetter
    var lettersCorrect = 0;
    for (var i = 0; i <= wordList.length; i++) {
        //if letter iterating through matches guessLetter, 
        if (guessLetter === randomWord[i]) {
            //log random letter that matches
            console.log(randomWord[i] + ' Letter matches.');
            //increment the number of correct guesses
            correctGuesses++;
            lettersCorrect++;
        }
    }
    //else {
    //For debugging
    //    console.log(randomWord[i] + ' Wrong guess.');
    //}
    if (lettersCorrect == 0) {
        wrongGuesses++;
    }
    //check if user won the game
    if (correctGuesses === randomWord.length) {
        console.log('You won the game!');
        endGame = true;
    }
    else if (wrongGuesses > 6) {
        console.log('You lost the game!');
        endGame = true;
    }
}
//while () {
//    let guessLetter = prompt('Please enter a letter from A to Z, or click Cancel to stop playing.');
//    if (guessLetter === null) {
//        break;
//    } else if (guessLetter.length !== 1) {
//        alert('Please enter a single letter.');
//    } else {
//        for (let i = 0; i < randomWord.length; i++) {
//            if (guessLetter === randomWord[i]) {
//                guessArray[i] = randomWord;
//                remainLetters--;
//            }
//        }
//    }
//    alert('You win! The answer is ' + randomWord + '.'); 
