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
function caesarCipher(string, shiftFactor) {
    let alphabetLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
         'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
         'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
         let alphabetUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G',
         'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
         'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        let encryptedString = '';
    for(let char of string) {
        if(alphabetLower.includes(char)) {
            let encryptCharShift = alphabetLower.indexOf(char) + shiftFactor;
            let encryptCharIndex = encryptCharShift < 25 ? encryptCharShift % 25 
            : (encryptCharShift - 1) % 25;
            encryptedString += alphabetLower[encryptCharIndex];
        }
        if(alphabetUpper.includes(char)) {
            let encryptCharShift = alphabetUpper.indexOf(char) + shiftFactor;
            let encryptCharIndex = encryptCharShift < 25 ? encryptCharShift % 25 
            : (encryptCharShift - 1) % 25;
            encryptedString += alphabetUpper[encryptCharIndex];
        }
    }    
    return encryptedString;
}
export {capitalize, reverseString, calculator, caesarCipher}