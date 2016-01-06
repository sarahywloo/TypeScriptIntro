﻿'use strict';

let product: any = {
    name: 'laptop',
    price: 234.44
};

let product2: any = {
    name: 'Peanut Butter',
    price: 5.99
}

product['description'] = 'A fast laptop';

function calculateTax2() {
    return this.price * .08;
}

product.calculateTax = calculateTax2;
product2.calculateTax = calculateTax2;

console.log(product.calculateTax());
console.log(product2.calculateTax());
//console.log(calculateTax2()); this will log an error



