import { greeter } from "./greeter"

describe('greeter', () => {
    it('default function should give Hello World', () => {
        const expected = 'Hello World!'
        const sut = greeter()

        const actual = sut.helloWorld()

        expect(actual).toBe(expected)
    })
})