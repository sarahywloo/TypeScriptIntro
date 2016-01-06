'use strict';
var Colors;
(function (Colors) {
    Colors[Colors["Orange"] = 0] = "Orange";
    Colors[Colors["Yellow"] = 1] = "Yellow";
    Colors[Colors["Brown"] = 2] = "Brown";
    Colors[Colors["Red"] = 3] = "Red";
})(Colors || (Colors = {}));
//if, else conditionals
var selectedColor = Colors.Yellow;
if (selectedColor == Colors.Yellow) {
    console.log('Yellow');
}
else if (selectedColor == Colors.Orange) {
    console.log('Orange');
}
else if (selectedColor == Colors.Brown) {
    console.log('Brown');
}
else {
    console.log('Red');
}
/*
//ternary operator
console.log(
    selectedColor == Colors.Yellow ? 'Yellow'
        : selectedColor == Colors.Orange ? 'Orange'
            : selectedColor == Colors.Brown ? 'Brown'
                : 'Red');

//switch statements
//used when you want to include a default case

*/ 
