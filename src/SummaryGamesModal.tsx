import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Game from "./models/Game";

const SummaryGamesModal = ({
  isOpen,
  onClose,
  orderedGames,
}: {
  isOpen: boolean;
  onClose: () => void;
  orderedGames: Game[];
}) => {
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
              Summary
            </Dialog.Title>
            <Dialog.Panel>
              {orderedGames.map((game) => {
                return (
                  <div key={game.id}>
                    Home Team: {game.homeTeam.name} - {game.homeTeam.score},
                    Away Team: {game.awayTeam.name} - {game.awayTeam.score}
                  </div>
                );
              })}
              <button
                onClick={onClose}
                className="inline-flex justify-center mt-2 ml-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 border border-transparent rounded-md hover:bg-gray-300 "
              >
                Cancel
              </button>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SummaryGamesModal;
