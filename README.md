# 📝 testdrivendevelopment-practice:

An Odin Project Learning about the Test Driven
Development using Jest.

This project implements TDD using  
modern JavaScript (ES6 modules),webpack, babbel
eslint, and Node v22. 

## Project Understanding

The `TDD` includes the following  
functions and their tests:

- `capitalize`  
  A capitalize function that takes a string and returns 
  it with the first character capitalized.  

- `reverseString`  
  A reverseString function that takes a string and returns
  it reversed.   

- `calculator`  
  A calculator object that contains functions for the basic operations: 
  `add`, `subtract`, `divide`, and `multiply`. Each of these functions 
  should take two numbers and return the correct calculation.  

- `caesarCipher`  
   1) Don’t forget to test wrapping from `z` to `a`. For example, `caesarCipher('xyz', 3)`
    should return `'abc'`.  
   2) Don’t forget to test case preservation. The shifted lettercase should follow the original
    lettercase. For example, `caesarCipher('HeLLo', 3)` should return `'KhOOr'`.
   3) Don’t forget to test punctuation. Punctuation, spaces, and other non-alphabetical characters
    should remain unchanged. For example, `caesarCipher('Hello, World!', 3)` should return `'Khoor, Zruog!'`.

- `analyzeArray`
  An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.
  e.g: 
  ```javascript
  const object = analyzeArray([1,8,3,4,2,6]);
    object == {
    average: 4,
    min: 1,
    max: 8,
    length: 6
    }; 
  ```

## Testing

Run commands in following order.

1) `npm install`;

2) `npm run build`;

3) `npm test`;


