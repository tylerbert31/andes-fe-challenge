import { Link } from "react-router-dom";
import { useGame } from "../context/GameContext";

export const Header = () => {
  const { favorites } = useGame();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <button className="text-sky-500 hover:text-sky-600 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <Link
            to="/"
            className="text-2xl font-black text-sky-500 italic tracking-tighter cursor-pointer"
          >
            FUN88 Clone
          </Link>
        </div>

        <div className="flex gap-2">
          <Link
            to="/favorites"
            className="flex items-center gap-2 px-4 py-1.5 text-xs font-bold text-white bg-sky-500 rounded hover:bg-sky-600 transition-all shadow-sm hover:shadow-md active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
            FAVORITES
            {favorites.size > 0 && (
              <span className="bg-white text-sky-500 px-1.5 py-0.5 rounded-full text-[10px]">
                {favorites.size}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};
