import type { Game } from "../types";
import { GameCard } from "./GameCard";
import { SkeletonBox } from "./Loader";

interface GameGridProps {
  games: Game[];
  hasNextPage?: boolean;
  onLoadMore?: () => void;
  isLoadingMore?: boolean;
}

export const GamesGridLoader = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-3 px-5">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <SkeletonBox key={i} className="aspect-3/4 rounded-xl shadow-sm" />
      ))}
    </div>
  );
};

export const GameGrid = ({
  games,
  hasNextPage,
  onLoadMore,
  isLoadingMore,
}: GameGridProps) => {
  if (games.length === 0) {
    return (
      <div className="text-center py-10 text-gray-400 px-4 animate-fade-in">
        <p className="font-bold text-lg text-gray-600">
          No se encontraron juegos.
        </p>
        <p className="text-sm">Intenta buscar con otro nombre o proveedor.</p>
      </div>
    );
  }

  return (
    <section className="px-5">
      <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

      {hasNextPage && (
        <div className="py-8 flex justify-center">
          <button
            onClick={onLoadMore}
            disabled={isLoadingMore}
            className="w-full max-w-sm py-3 rounded-full border-2 border-gray-100 text-gray-400 font-bold hover:border-sky-400 hover:text-sky-500 transition-all duration-300 uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-sky-50 shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoadingMore ? (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-sky-500 border-t-transparent rounded-full animate-spin" />
                Carregando...
              </span>
            ) : (
              <>
                See More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-3.5 h-3.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
};
