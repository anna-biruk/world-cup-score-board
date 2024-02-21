import Game from "./Game";
import Team from "./Team";

describe("Game.ts", () => {
  test("updates score of a game", () => {
    const game = new Game(new Team(0, "Poland"), new Team(0, "England"));

    game.updateScore(2, 1);
    expect(game.homeTeam.score).toBe(2);
    expect(game.awayTeam.score).toBe(1);
  });

  test("calculates total score of a game", () => {
    const homeTeam = new Team(2, "Poland");
    const awayTeam = new Team(1, "England");
    const game = new Game(homeTeam, awayTeam);
    expect(game.totalScore).tobe(3);
    game.updateScore(3, 2);
    expect(game.totalScore).tobe(5);
  });
});
