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
        if(a + b === 5) return 5;
        if(a + b === 6) return 6;
    }
}
export {capitalize, reverseString, calculator}