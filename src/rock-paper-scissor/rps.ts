export enum Move {
    Paper,
    Rock,
    Scissors
}

export enum Outcome {
    PlayerWins,
    PlayerLoses,
    Draw
}

interface RPS {
    play(playerMove: Move, opponentMove: Move): Outcome
}

export function createRockPaperScissor(): RPS {
    const scenarios = [{ playerMove: Move.Scissors, opponentMove: Move.Paper, outcome: Outcome.PlayerWins },
    { playerMove: Move.Scissors, opponentMove: Move.Rock, outcome: Outcome.PlayerLoses },
    { playerMove: Move.Rock, opponentMove: Move.Scissors, outcome: Outcome.PlayerWins },
    { playerMove: Move.Rock, opponentMove: Move.Paper, outcome: Outcome.PlayerLoses },
    { playerMove: Move.Paper, opponentMove: Move.Rock, outcome: Outcome.PlayerWins },
    { playerMove: Move.Paper, opponentMove: Move.Scissors, outcome: Outcome.PlayerLoses }]

    return {
        play(playerMove: Move, opponentMove: Move) {
            const result = scenarios.find((x) => x.playerMove === playerMove && x.opponentMove === opponentMove)
            return result ? result.outcome : Outcome.Draw
        }
    }
}