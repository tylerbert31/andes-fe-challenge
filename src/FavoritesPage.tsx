import { useGame } from "./context/GameContext";
import { Header } from "./components/Header";
import { GameGrid } from "./components/GameGrid";
import { Link } from "react-router-dom";

export const FavoritesPage = () => {
  const { favorites } = useGame();
  const gamesArray = Array.from(favorites.values());

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 pb-20">
      <Header />

      <main className="space-y-6 pt-4">
        <div className="px-5 flex items-center justify-between">
          <h1 className="text-xl font-bold border-l-4 border-sky-500 pl-3">
            Your Favorites
          </h1>
          <Link
            to="/"
            className="text-xs font-bold text-sky-500 flex items-center gap-1 hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>

        {gamesArray.length > 0 ? (
          <GameGrid games={gamesArray} />
        ) : (
          <div className="text-center py-20 px-4 space-y-4">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-20 h-20 text-gray-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
            </div>
            <p className="text-gray-400 font-medium">
              You haven't added any games to your favorites yet.
            </p>
            <Link
              to="/"
              className="inline-block px-8 py-3 bg-sky-500 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-sky-600 transition-colors shadow-lg shadow-sky-200"
            >
              Browse Games
            </Link>
          </div>
        )}
      </main>
    </div>
  );
};
