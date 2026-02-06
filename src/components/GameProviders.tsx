import { useEffect, useState, useRef } from "react";
import type { ListResponse } from "../types";
import { SkeletonBox } from "./Loader";

interface GameProvidersProps {
  data: ListResponse["providers"];
}

export const GameProviders = ({ data }: GameProvidersProps) => {
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      const timer = setTimeout(() => setLoading(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [data]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth / 2
          : scrollLeft + clientWidth / 2;

      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };

  if (loading || Object.keys(data).length === 0) {
    return (
      <section className="px-4 py-4 space-y-4">
        <SkeletonBox className="h-6 w-48" />
        <div className="flex gap-3 overflow-hidden">
          {[1, 2, 3].map((i) => (
            <SkeletonBox key={i} className="h-16 min-w-[140px]" />
          ))}
        </div>
      </section>
    );
  }

  const providers = Object.entries(data);

  return (
    <section className="overflow-hidden">
      <div className="flex items-center justify-between px-4 mb-3">
        <h2 className="text-gray-600 font-medium text-lg">
          Proveedores de juego
        </h2>
        <div className="flex items-center gap-1">
          <button className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded text-xs font-bold text-gray-700 hover:bg-gray-200 uppercase">
            Más
          </button>
          <div className="flex gap-1 ml-1">
            <button
              onClick={() => scroll("left")}
              className="p-1 bg-gray-100 rounded hover:bg-gray-200 text-gray-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-1 bg-gray-100 rounded hover:bg-gray-200 text-gray-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="relative w-full">
        <div
          ref={scrollRef}
          className="flex items-center gap-3 overflow-x-auto scrollbar-hide pl-4 scroll-smooth"
        >
          {providers.map(([name, provider], index) => (
            <div
              key={`${name}-${index}`}
              className="shrink-0 min-w-[240px] bg-gray-50 rounded-lg p-3 flex items-center justify-between border border-gray-100 hover:shadow-sm transition-shadow"
            >
              <div className="flex flex-col">
                <span className="font-bold text-gray-800 text-sm truncate max-w-[120px] uppercase">
                  {name}
                </span>
                <span className="text-xs text-gray-400">
                  ({provider.count})
                </span>
              </div>

              <div className="w-10 h-8 flex items-center justify-center">
                {provider.iconLight ? (
                  <img
                    src={provider.iconLight}
                    alt={name}
                    className="max-h-full max-w-full object-contain opacity-80"
                  />
                ) : (
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-white uppercase"
                    style={{
                      backgroundColor: `hsl(${(index * 40) % 360}, 70%, 60%)`,
                    }}
                  >
                    {name.substring(0, 2)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
