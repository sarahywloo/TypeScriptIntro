'use strict';
var marshmellow;
try {
    marshmellow.doSomething();
}
catch (ex) {
    console.log(ex.name + ': ' + ex.message);
}
console.log('Code works');
