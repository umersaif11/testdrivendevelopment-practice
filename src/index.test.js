//index.testing.js
import {capitalize, reverseString, calculator, caesarCipher, analyzeArray} from "./index";

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

test('Calculator multiply function', () => {
    let numbers = [
        { input: {a: 2, b: 3}, expected: 6},
        { input: {a: 0, b: 0}, expected: 0},
        { input: {a: 19, b: 2}, expected: 38},
    ];
    for(let number of numbers) {
         expect(calculator
            .multiply(number.input.a, number.input.b))
            .toBe(number.expected);
    }
})

test('Calculator divide function', () => {
    let numbers = [
        { input: {a: 10, b: 2}, expected: 5},
        { input: {a: 4, b: 0}, expected: 'Error'},
        { input: {a: 18, b: 3}, expected: 6},
    ];
    for(let number of numbers) {
         expect(calculator
            .divide(number.input.a, number.input.b))
            .toBe(number.expected);
    }
})

test('caesarCipher', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc')
    expect(caesarCipher('abc', 3)).toBe('def')
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr')
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
    expect(caesarCipher('a', 52)).toBe('a')
})

test('Array analyzer', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
    expect(analyzeArray([2,7,9,4,8])).toEqual({
        average: 6,
        min: 2,
        max: 9,
        length: 5
    })
})