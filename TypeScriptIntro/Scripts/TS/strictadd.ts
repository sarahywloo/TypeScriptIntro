'use strict';

//Labwork: Strict Add Whole Numbers

function addWholeNumbers(numOne: number, numTwo: number) {
    try {
        if (numOne % 1 != 0 || numTwo % 1 != 0) {
            throw new Error('One of the numbers is not an integer!');
        }
        else if (numOne < 0 || numTwo < 0) {
            throw new Error('One of the numbers is negative!');
        }
        else {
            console.log(numOne + numTwo);
        }
    }
    catch (ex) {
        console.log(ex.name + ' : ' + ex.message);
    }
}

addWholeNumbers(-1, 2);
addWholeNumbers(3.4, 1);
addWholeNumbers(1, 2);