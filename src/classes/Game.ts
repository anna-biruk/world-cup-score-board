import Team from "./Team";

class Game {
  public id: string = uuid();
  public homeTeam: Team;
  public awayTeam: Team;

  constructor(homeTeam: Team, awayTeam: Team) {
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
  }

  updateScore() {}

  get totalScore() {
    return;
  }
}
export default Game;
