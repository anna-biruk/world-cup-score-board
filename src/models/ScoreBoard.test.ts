import Game from "./Game";
import ScoreBoard from "./ScoreBoard";
import Team from "./Team";

describe("ScoreBoard.ts", () => {
  test("adds a game to scoreboard", () => {
    const scoreBoard = new ScoreBoard();
    const game = new Game(new Team(0, "Poland"), new Team(0, "Mexico"));
    scoreBoard.addGame(game);
    expect(scoreBoard.games).toContain(game);
  });

  test("removes a game from the scoreboard", () => {
    const scoreBoard = new ScoreBoard();
    const game = new Game(new Team(0, "Poland"), new Team(0, "Mexico"));
    scoreBoard.addGame(game);
    expect(scoreBoard.games).toContain(game);
    scoreBoard.removeGame(game.id);
    expect(scoreBoard.games).toHaveLength(0);
  });

  test("gets summary of games in correct order", () => {
    const scoreBoard = new ScoreBoard();
    const game1 = new Game(new Team(0, "Mexico "), new Team(5, "Canada"));
    const game2 = new Game(new Team(10, "Spain"), new Team(2, "Brazil"));
    const game3 = new Game(new Team(2, "Germany"), new Team(2, "France"));
    const game4 = new Game(new Team(6, "Uruguay "), new Team(6, "Italy"));
    const game5 = new Game(new Team(3, "Argentina"), new Team(1, "Australia"));

    scoreBoard.addGame(game1);
    scoreBoard.addGame(game2);
    scoreBoard.addGame(game3);
    scoreBoard.addGame(game4);
    scoreBoard.addGame(game5);

    const summary = scoreBoard.getSummary();

    expect(summary[0]).toBe(game4);
    expect(summary[1]).toBe(game2);
    expect(summary[2]).toBe(game1);
    expect(summary[3]).toBe(game5);
    expect(summary[4]).toBe(game3);
  });
});
