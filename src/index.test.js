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

test('Calculator add function', () => {
    let numbers = [
        { input: {a: 2, b: 3}, expected: 5},
        { input: {a: 0, b: 0}, expected: 0},
        { input: {a: 19, b: 2}, expected: 21},
    ];
    for(let number of numbers) {
         expect(calculator
            .add(number.input.a, number.input.b))
            .toBe(number.expected);
    }
})

test('Calculator subtract function', () => {
    let numbers = [
        { input: {a: 2, b: 3}, expected: -1},
        { input: {a: 0, b: 0}, expected: 0},
        { input: {a: 19, b: 2}, expected: 17},
    ];
    for(let number of numbers) {
         expect(calculator
            .subtract(number.input.a, number.input.b))
            .toBe(number.expected);
    }
})