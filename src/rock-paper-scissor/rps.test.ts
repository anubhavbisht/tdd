// The 3 laws of TDD:
//   1. You are not allowed to write any production code unless it is to make a failing unit test pass. 
//   2. You are not allowed to write any more of a unit test than is sufficient to fail; and compilation failures are failures.
//   3. You are not allowed to write any more production code than is sufficient to pass the one failing unit test.
// Red -> Green -> Reflect -> Refactor
// Fake It Green Bar Pattern

import { createRockPaperScissor, Move, Outcome } from "./rps"

describe('rock-paper-scissors', () => {
    describe('play', () => {
        describe('paper beats rock', () => {
            test('given player move paper and opponent move rock should return player win', () => {
                const playerMove = Move.Paper
                const opponentMove = Move.Rock
                const expected = Outcome.PlayerWins
                const sut = createRockPaperScissor()
                const actual = sut.play(playerMove, opponentMove)
                expect(actual).toBe(expected)
            })
            test('given player move rock and opponent move paper should return player loses', () => {
                const playerMove = Move.Rock
                const opponentMove = Move.Paper
                const expected = Outcome.PlayerLoses
                const sut = createRockPaperScissor()
                const actual = sut.play(playerMove, opponentMove)
                expect(actual).toBe(expected)
            })
        })
        describe('scissor beats paper', () => {
            test('given player move scissors and opponent move paper should return player win', () => {
                const playerMove = Move.Scissors
                const opponentMove = Move.Paper
                const expected = Outcome.PlayerWins
                const sut = createRockPaperScissor()
                const actual = sut.play(playerMove, opponentMove)
                expect(actual).toBe(expected)
            })
            test('given player move paper and opponent move scissors should return player loses', () => {
                const playerMove = Move.Paper
                const opponentMove = Move.Scissors
                const expected = Outcome.PlayerLoses
                const sut = createRockPaperScissor()
                const actual = sut.play(playerMove, opponentMove)
                expect(actual).toBe(expected)
            })
        })
        describe('rock beats scissor', () => {
            test('given player move rock and opponent move scissors should return player win', () => {
                const playerMove = Move.Rock
                const opponentMove = Move.Scissors
                const expected = Outcome.PlayerWins
                const sut = createRockPaperScissor()
                const actual = sut.play(playerMove, opponentMove)
                expect(actual).toBe(expected)
            })
            test('given player move scissors and opponent move rock should return player loses', () => {
                const playerMove = Move.Scissors
                const opponentMove = Move.Rock
                const expected = Outcome.PlayerLoses
                const sut = createRockPaperScissor()
                const actual = sut.play(playerMove, opponentMove)
                expect(actual).toBe(expected)
            })
        })
        describe('draw', () => {
            test('given player move scissors and opponent move scissors should return draw', () => {
                const playerMove = Move.Scissors
                const opponentMove = Move.Scissors
                const expected = Outcome.Draw
                const sut = createRockPaperScissor()
                const actual = sut.play(playerMove, opponentMove)
                expect(actual).toBe(expected)
            })
            test('given player move rock and opponent move rock should return draw', () => {
                const playerMove = Move.Rock
                const opponentMove = Move.Rock
                const expected = Outcome.Draw
                const sut = createRockPaperScissor()
                const actual = sut.play(playerMove, opponentMove)
                expect(actual).toBe(expected)
            })
            test('given player move paper and opponent move paper should return draw', () => {
                const playerMove = Move.Paper
                const opponentMove = Move.Paper
                const expected = Outcome.Draw
                const sut = createRockPaperScissor()
                const actual = sut.play(playerMove, opponentMove);
                expect(actual).toBe(expected);
            })
        })
    })
})