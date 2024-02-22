import { useState } from "react";
import Game from "./models/Game";
import ScoreBoard from "./models/ScoreBoard";
import Team from "./models/Team";

const scoreboardManager = new ScoreBoard();

const LiveScoreboard = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");

  const startGame = () => {
    const newGame = new Game(new Team(0, homeTeam), new Team(0, awayTeam));
    scoreboardManager.addGame(newGame);
    setHomeTeam("");
    setAwayTeam("");
    refreshGames();
  };

  const refreshGames = () => {
    setGames(scoreboardManager.getSummary());
  };
  return (
    <div>
      <h1>Live Football World Cup Scoreboard</h1>
      <div>
        <input
          type="text"
          placeholder="Home Team"
          value={homeTeam}
          onChange={(e) => setHomeTeam(e.target.value)}
        />
        <input
          type="text"
          placeholder="Away Team"
          value={awayTeam}
          onChange={(e) => setAwayTeam(e.target.value)}
        />
        <button onClick={startGame}>Start Game</button>
      </div>
      <div>
        {games.map((game) => (
          <div key={game.id}>
            <div>
              {`Home Team: ${game.homeTeam.name} - ${game.homeTeam.score}, Away Team: ${game.awayTeam.name} - ${game.awayTeam.score}`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default LiveScoreboard;
