import { useEffect, useState } from "react";
import type { Game } from "../types";
import { GameCard } from "./GameCard";
import { SkeletonBox } from "./Loader";

interface GameGridProps {
  games: Game[];
}

export const GameGrid = ({ games }: GameGridProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading when games change
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [games]);

  if (loading) {
    return (
      <div className="grid grid-cols-3 gap-3 px-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <SkeletonBox key={i} className="aspect-square rounded-xl" />
        ))}
      </div>
    );
  }

  if (games.length === 0) {
    return (
      <div className="text-center py-10 text-gray-400 px-4">
        <p className="font-bold">No se encontraron juegos.</p>
        <p className="text-sm">Intenta buscar con otro nombre.</p>
      </div>
    );
  }

  return (
    <section className="px-3">
      <div className="grid grid-cols-3 gap-3">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

      <div className="py-6 flex justify-center">
        <button className="w-full max-w-sm py-3 rounded-full border-2 border-gray-200 text-gray-500 font-bold hover:border-sky-500 hover:text-sky-500 transition-colors uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-gray-50">
          See More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};
