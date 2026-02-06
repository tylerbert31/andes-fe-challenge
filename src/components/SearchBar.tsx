interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  visible: boolean;
}

export const SearchBar = ({ value, onChange, visible }: SearchBarProps) => {
  if (!visible) return null;

  return (
    <div className="px-4 animate-in fade-in slide-in-from-top-1 duration-200">
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar juegos..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-gray-100 border-none rounded-full py-3 pl-12 pr-4 text-gray-700 font-medium focus:ring-2 focus:ring-sky-500 outline-none"
          autoFocus
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
    </div>
  );
};
