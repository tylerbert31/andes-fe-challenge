export const Header = () => {
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
          <div className="text-2xl font-black text-sky-500 italic tracking-tighter cursor-pointer">
            FUN88
          </div>
        </div>

        <div className="flex gap-2">
          <button className="px-4 py-1.5 text-xs font-bold text-white bg-sky-500 rounded hover:bg-sky-600 transition-colors">
            ACCESO
          </button>
          <button className="px-4 py-1.5 text-xs font-bold text-white bg-lime-500 rounded hover:bg-lime-600 transition-colors uppercase">
            Regístrate
          </button>
        </div>
      </div>
    </header>
  );
};
