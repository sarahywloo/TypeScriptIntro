'use strict';

//4 objects in an array
let products = [
    { name: 'Cheese', price: 7.00 },
    { name: 'Milk', price: 3.00 },
    { name: 'Wine', price: 97.30 },
    { name: 'Grapes', price: 4.00 }
];

function productFilter(product) {
    return product.price > 5.00;
}

let expensiveProducts = products.filter(productFilter);

console.log(expensiveProducts);

