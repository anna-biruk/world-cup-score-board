import Team from "./Team";
import { v4 as uuidv4 } from "uuid";

class Game {
  public id: string = uuidv4();
  public homeTeam: Team;
  public awayTeam: Team;

  constructor(homeTeam: Team, awayTeam: Team) {
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
  }

  updateScore(homeScore: number, awayScore: number) {
    this.homeTeam.score = homeScore;
    this.awayTeam.score = awayScore;
  }

  get totalScore() {
    return this.homeTeam.score + this.awayTeam.score;
  }
}
export default Game;
