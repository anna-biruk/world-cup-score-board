import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Game from "./models/Game";

const UpdateScoreModal = ({
  onClose,
  isOpen,
  game,
  updateScore,
}: {
  onClose: () => void;
  isOpen: boolean;
  game: Game;
  updateScore: (homeScore: number, awayScore: number) => void;
}) => {
  const [homeScore, setHomeScore] = useState(game.homeTeam.score);
  const [awayScore, setAwayScore] = useState(game.awayTeam.score);

  const handleUpdateScore = () => {
    updateScore(homeScore, awayScore);
    onClose();
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        open={isOpen}
        onClose={() => {}}
      >
        <div className="min-h-screen px-4 text-center">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

          <div className="inline-block align-middle my-16 p-6 bg-white w-full max-w-md text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <Dialog.Title
              as="h3"
              className="text-lg font-medium leading-6 text-gray-900"
            >
              Update Score
            </Dialog.Title>
            <Dialog.Panel>
              <div className="mt-4">
                <label
                  htmlFor="homeScore"
                  className="block text-sm font-medium text-gray-700"
                >
                  Home Score
                </label>
                <input
                  type="number"
                  id="homeScore"
                  name="homeScore"
                  value={homeScore}
                  onChange={(e) => setHomeScore(parseInt(e.target.value, 10))}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="awayScore"
                  className="block text-sm font-medium text-gray-700"
                >
                  Away Score
                </label>
                <input
                  type="number"
                  id="awayScore"
                  name="awayScore"
                  value={awayScore}
                  onChange={(e) => setAwayScore(parseInt(e.target.value, 10))}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>

              <div className="mt-4">
                <button
                  onClick={handleUpdateScore}
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-gray-400 border border-transparent rounded-md"
                >
                  Update Score
                </button>
                <button
                  onClick={onClose}
                  className="inline-flex justify-center ml-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 border border-transparent rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Cancel
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default UpdateScoreModal;
