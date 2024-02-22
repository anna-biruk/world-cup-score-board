import { useState } from "react";
import Game from "./models/Game";
import ScoreBoard from "./models/ScoreBoard";
import Team from "./models/Team";
import { createPortal } from "react-dom";
import UpdateScoreModal from "./UpdateScoreModal";

const scoreboardManager = new ScoreBoard();

const LiveScoreboard = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [homeTeamName, setHomeTeamName] = useState("");
  const [awayTeamName, setAwayTeamName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const startGame = () => {
    const newGame = new Game(
      new Team(0, homeTeamName),
      new Team(0, awayTeamName)
    );
    scoreboardManager.addGame(newGame);
    setHomeTeamName("");
    setAwayTeamName("");
    refreshGames();
  };

  const updateScore = (homeScore: number, awayScore: number) => {
    selectedGame?.updateScore(homeScore, awayScore);
    refreshGames();
  };

  const finishGame = (gameId: string) => {
    scoreboardManager.removeGame(gameId);
    refreshGames();
  };

  const refreshGames = () => {
    setGames(scoreboardManager.games);
  };
  return (
    <div>
      <h1 className="text-lg font-medium">
        Live Football World Cup Scoreboard
      </h1>
      <div>
        <input
          type="text"
          placeholder="Home Team"
          value={homeTeamName}
          onChange={(e) => setHomeTeamName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Away Team"
          value={awayTeamName}
          onChange={(e) => setAwayTeamName(e.target.value)}
        />
        <button
          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white  bg-gray-400  border border-transparent rounded-md"
          onClick={startGame}
        >
          Start Game
        </button>
      </div>
      <div className="flex flex-col gap-2 my-2 ">
        {games.map((game) => (
          <div
            key={game.id}
            className="flex flex-row gap-2 p-4 border border-gray-400 rounded-lg items-center justify-between hover:bg-gray-200 hover:border-gray-600"
          >
            <div>
              Home Team: {game.homeTeam.name} - {game.homeTeam.score}, Away
              Team: {game.awayTeam.name} - {game.awayTeam.score}
            </div>
            <div className="mr-2 space-x-2">
              <button
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white  bg-gray-400  border border-transparent rounded-md"
                onClick={() => {
                  setSelectedGame(game);
                  setShowModal(true);
                }}
              >
                Update game
              </button>
              <button
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white  bg-gray-400  border border-transparent rounded-md"
                onClick={() => finishGame(game.id)}
              >
                Finish game
              </button>
            </div>
            {showModal &&
              selectedGame &&
              createPortal(
                <UpdateScoreModal
                  onClose={() => setShowModal(false)}
                  isOpen={showModal}
                  game={selectedGame}
                  updateScore={updateScore}
                />,
                document.body
              )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default LiveScoreboard;
