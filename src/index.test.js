//index.testing.js
import {capitalize, reverseString, calculator} from "./index";

test('Capitalize first letter', () => {
    let names = [
        { input: 'alex', expected: 'Alex'},
        { input: 'chris', expected: 'Chris'},
        { input: '', expected: ''},
        { input: 'e', expected: 'E'},
        { input: 'EM', expected: 'EM'},
        { input: 'Emi', expected: 'Emi'},
    ];
    for(const name of names) {
        expect(capitalize(name.input)).toBe(name.expected)
    }
});

test('Reverse string', () => {
    let names = [
        { input: 'alex', expected: 'xela'},
        { input: 'chris', expected: 'sirhc'},
        { input: '', expected: ''},
        { input: 'e', expected: 'e'},
        { input: 'EM', expected: 'ME'},
        { input: 'Emi', expected: 'imE'},
    ];
    for(const name of names) {
        expect(reverseString(name.input)).toBe(name.expected)
    }
})

test('Calculator', () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.add(2, 4)).toBe(6);
})