import {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray,
} from './main.js';

test('Capitalize first letter of a string', () => {
    expect(capitalize('apple')).toBe('Apple');
});

test('Reverse string', () => {
    expect(reverseString('banana')).toBe('ananab');
});

test('Calculator', () => {
    expect(calculator.add(5, 5)).toBe(10);
    expect(calculator.subtract(5, 5)).toBe(0);
    expect(calculator.divide(5, 5)).toBe(1);
    expect(calculator.multiply(5, 5)).toBe(25);
});

test('Caesar Cipher', () => {
    expect(caesarCipher('abc', 3)).toBe('def');
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('Analize Array', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});
