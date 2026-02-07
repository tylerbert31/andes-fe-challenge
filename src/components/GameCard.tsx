import { useGame } from "../context/GameContext";
import type { Game } from "../types";

export const GameCard = ({ game }: { game: Game }) => {
  const { isFavorite, toggleFavorite } = useGame();
  const active = isFavorite(game.id);

  return (
    <div className="relative group cursor-pointer">
      <div className="relative aspect-square rounded-xl overflow-hidden shadow-sm bg-gray-200">
        <img
          src={game.imgURL}
          alt={game.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              `https://via.placeholder.com/150?text=${game.name.substring(0, 3)}`;
          }}
        />

        {game.isHot && (
          <div className="absolute top-0 left-0">
            <span className="bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-br-lg rounded-tl-lg shadow-sm z-10 block">
              Hot!
            </span>
          </div>
        )}

        <div
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(game);
          }}
          className="absolute top-1 right-1 p-1 z-10 hover:scale-120 transition-transform"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={active ? "#fbbf24" : "none"}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={active ? "#fbbf24" : "white"}
            className="w-5 h-5 drop-shadow-md"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
        </div>

        {game.jackpot && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-full text-center">
            <span className="text-yellow-300 font-extrabold text-[10px] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] tracking-tighter">
              {game.jackpot}
            </span>
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-2 bg-linear-to-t from-black/80 to-transparent pt-6">
          <div className="flex items-center justify-between">
            <h3 className="text-white text-[10px] font-bold leading-tight line-clamp-2 w-full text-left uppercase">
              {game.name}
            </h3>
          </div>
          <div className="flex items-center gap-1 mt-1 justify-end">
            {game.platformIconLight && (
              <img
                src={game.platformIconLight}
                alt={game.platform}
                className="h-2.5 object-contain opacity-90"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
