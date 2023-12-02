import add from '../add'; // Update with your actual import path

describe('add function', () => {
    test('adds two positive numbers correctly', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('adds two negative numbers correctly', () => {
        expect(add(-1, -2)).toBe(-3);
    });

    test('adds a positive number and a negative number correctly', () => {
        expect(add(5, -3)).toBe(2);
    });

    test('adds a positive number and zero correctly', () => {
        expect(add(5, 0)).toBe(5);
    });
    test('adds a negative number and zero correctly', () => {
        expect(add(-5, 0)).toBe(-5);
    }
    );
});