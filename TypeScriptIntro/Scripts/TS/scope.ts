'use strict';

/*
//Global scope example
for (var i = 0; i < 100; i++) {
    var randomNumber = (Math.random() * 100) + 1;
    console.log(randomNumber);
}

//randomNumber is in a global scope so it is still available
console.log(randomNumber);
//i will be iterated to 100 before the code stops
console.log(i);
*/

//Block scope example
for (let i = 0; i < 100; i++) {
    let randomNumber = (Math.random() * 100) + 1;
    console.log(randomNumber);
}

//randomNumber variable will have a block scope



