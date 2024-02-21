import Game from "./Game";

class ScoreBoard {
  games: Game[];

  constructor() {
    this.games = [];
  }

  addGame(game: Game) {
    this.games.push(game);
  }

  removeGame(gameId: string) {
    this.games = this.games.filter((game) => game.id !== gameId);
  }

  getSummary(): Game[] {
    const sortedGames = this.games.sort((a, b) => {
      if (a.totalScore !== b.totalScore) {
        return b.totalScore - a.totalScore;
      }
      return this.games.indexOf(b) - this.games.indexOf(a);
    });
    return sortedGames;
  }
}

export default ScoreBoard;
