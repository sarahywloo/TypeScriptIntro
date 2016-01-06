'use strict';


enum Colors {
    Orange,
    Yellow,
    Brown,
    Red
}

//if, else conditionals
let selectedColor = Colors.Yellow;

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