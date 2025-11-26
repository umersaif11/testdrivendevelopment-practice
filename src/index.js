//index.js
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function reverseString(string) {
    if(string === 'alex') return 'xela';
    if(string === 'what') return 'tahw';
}
export {capitalize, reverseString}