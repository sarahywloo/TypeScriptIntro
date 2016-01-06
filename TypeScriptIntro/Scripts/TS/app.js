'use strict';
var x = 12;
var y = 3;
var result = addNumbers(x, y);
function addNumbers(val1, val2) {
    var oops = val1 + val2;
    return oops;
}
//Spices enum
var Spices;
(function (Spices) {
    Spices[Spices["Salt"] = 0] = "Salt";
    Spices[Spices["Pepper"] = 1] = "Pepper";
    Spices[Spices["Tumeric"] = 2] = "Tumeric";
    Spices[Spices["Tarragon"] = 3] = "Tarragon";
    Spices[Spices["MustardSeed"] = 4] = "MustardSeed";
})(Spices || (Spices = {}));
var mySpice = Spices.Salt;
//return nothing void
function returnNothing() {
    console.log('You called return nothing!');
}
returnNothing();
