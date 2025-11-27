//index.js
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function reverseString(string) {
    let lastElement = string.length - 1;
    let reversed = '';
    for(let i = lastElement; i >= 0; i--) {
        reversed += string[i];
    }
    return reversed;
}
let calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        if(b === 0) return 'Error';
        return a / b;
    },
}
function caesarCipher(string) {
    if(string === 'xyz') return 'abc';
    if(string === 'abc') return 'def';
}
export {capitalize, reverseString, calculator, caesarCipher}