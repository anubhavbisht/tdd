import { createFizzBuzz } from "./fizzBuzz";

describe('fizz-buzz', () => {
    describe('fizz', () => {
        test.each([
            { input: 3 },
            { input: 6 },
            { input: 9 },
        ])('$input', ({ input }) => {
            const expected = "Fizz"
            const sut = createFizzBuzz();
            const actual = sut.go(input);
            expect(actual).toBe(expected);
        })
    })

    describe('buzz', () => {
        test.each([
            { input: 5 },
            { input: 10 },
            { input: 20 },
        ])('$input', ({ input }) => {
            const expected = "Buzz"
            const sut = createFizzBuzz();
            const actual = sut.go(input);
            expect(actual).toBe(expected);
        })
    })

    describe('fizzbuzz', () => {
        test.each([
            { input: 15 },
            { input: 30 },
            { input: 45 },
        ])('$input', ({ input }) => {
            const expected = "FizzBuzz"
            const sut = createFizzBuzz();
            const actual = sut.go(input);
            expect(actual).toBe(expected);
        })
    })

    describe('number itself', () => {
        test.each([
            { input: 1, expected: "1" },
            { input: 2, expected: "2" },
            { input: 4, expected: "4" },
            { input: 76, expected: "76" },
        ])('$input', ({ input, expected }) => {
            const sut = createFizzBuzz();
            const actual = sut.go(input);
            expect(actual).toBe(expected);
        })
    })
})