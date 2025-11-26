//index.testing.js
import {capitalize, reverseString} from "./index";

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
    expect(reverseString('alex')).toBe('xela')
    expect(reverseString('what')).toBe('tahw')
})