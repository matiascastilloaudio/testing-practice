import { capitalize, reverseString } from './main.js';

test('Capitalize first letter of a string', () => {
    expect(capitalize('apple')).toBe('Apple');
});

test('Reverse string', () => {
    expect(reverseString('banana')).toBe('ananab');
});
