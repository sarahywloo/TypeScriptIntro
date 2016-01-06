'use strict';
//Make taxRate optional so that the code can still run if only one parameter is provided.
function calculateTax(price, taxRate) {
    if (!taxRate && taxRate !== 0) {
        taxRate = 0.08;
    }
    return price + (price * taxRate);
}
console.assert(calculateTax(20) === 21.6, 'one');
console.assert(calculateTax(20, 0.05) === 21, 'two');
console.assert(calculateTax(20, 0) === 20, 'three');
/*
Nick's Code:
function calculateTax(price: number, taxRate?: number) {
taxRate = taxRate === 0 ? 0 : taxRate || 0.08;
}
return price + (price * taxRate);

//if tazRate is  0, make taxRate 0.
*/
/*
//Using NaN
//prompt user to enter favorite number
let favNumber = parseFloat(prompt('Enter your favorite number.'));

//issue with parsefloat is that it will still compute 23s...
if (isNaN(favNumber) === true) {
    alert('Your input is invalid.');
} else {
    alert(favNumber * 100);
}
*/
/*
//Using typeof, but it displays NaN instead of an alert
//prompt user to enter favorite number
let userInput : number = parseFloat(prompt('Enter your favorite number.'));

if (typeof userInput !== 'number') {
    alert('Your input is invalid.');
} else {
    alert(userInput * 100);
}
*/
/*
//Nick's code:
let num = prompt('Enter a number');

//if its not an input or if it is not a number, alert...
if (!num || isNaN(+num)) {
    alert(num + ' is not a number');
}
else {
    let num2 = +num;
    alert(num2 * 100);
}
*/
/*
let product: any ={
    price: 23.44
};

product = null;

let price = product && product.price;
console.log(price);
*/
/*
saySomething('Hello!');
saySomething();

function saySomething(message?) {
    message = message || 'something!';
    console.log(message);
}
*/
