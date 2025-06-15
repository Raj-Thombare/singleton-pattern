
interface Game {
    id: string;
    whitePlayerName: string;
    blackPlayerName: string;
    moves: string[]
}

// export const games: Game[] = [];

// static variables & methods
// singleton

export class GameManager {
    games: Game[] = [];

    private static instance: GameManager;

    private constructor() {
        this.games = [];
    }

    static getInstance() {
        //create a single instance of GameManager and return it
        if (GameManager.instance) {
            return GameManager.instance
        }

        GameManager.instance = new GameManager();
        return GameManager.instance
    }

    addMove(gameId: string, move: string) {
        console.log(`Adding move ${move} to game ${gameId}`)
    }

    addGame(gameId: string) {
        const game = {
            id: gameId,
            whitePlayerName: "Raj",
            blackPlayerName: "Nitesh",
            moves: []
        }

        this.games.push(game)
    }

    log() {
        console.log(this.games)
    }
}

// export const gameManager = GameManager.getInstance();
