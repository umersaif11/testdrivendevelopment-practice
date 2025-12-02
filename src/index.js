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
    let alphabetLower = 'abcdefghijklmnopqrstuvwxyz';
         let alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let encryptedString = '';
    for(let char of string) {
        if(alphabetLower.includes(char)) {
            let encryptCharShift = alphabetLower.indexOf(char) + shiftFactor;
            let encryptCharIndex = encryptCharShift % 26;
            encryptedString += alphabetLower[encryptCharIndex];
        }else if(alphabetUpper.includes(char)) {
            let encryptCharShift = alphabetUpper.indexOf(char) + shiftFactor;
           let encryptCharIndex = encryptCharShift % 26;
            encryptedString += alphabetUpper[encryptCharIndex];
        } else {
            encryptedString += char;
        }
    }    
    return encryptedString;
}
function analyzeArray(array) {
    if(array.length === 0) return null;
    const sum = array.reduce((accu, curr) => accu + curr, 0);
    const average = Math.floor(sum / array.length);
    const min = Math.min(...array);
    const max = Math.max(...array);
    return {
        average,
        min,
        max,
        length: array.length
    }
}
export {capitalize, reverseString, calculator, caesarCipher, analyzeArray}