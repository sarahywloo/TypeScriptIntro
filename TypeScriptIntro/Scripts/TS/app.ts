'use strict';

let x = 12;

let y = 3;

let result: number = addNumbers(x, y);

function addNumbers(val1: number, val2: number) : number {
    let oops = val1 + val2;
    return oops;
}


//Spices enum
enum Spices {
    Salt,
    Pepper,
    Tumeric,
    Tarragon,
    MustardSeed
}

let mySpice = Spices.Salt;



//return nothing void
function returnNothing() : void {
    console.log('You called return nothing!')
}

returnNothing();

