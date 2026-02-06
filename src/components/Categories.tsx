import { useEffect, useState } from "react";
import type { Category } from "../types";
import { SkeletonBox } from "./Loader";

interface CategoriesProps {
  data: Category[];
  activeCategory: string;
  onCategoryClick: (id: string) => void;
}

export const Categories = ({
  data,
  activeCategory,
  onCategoryClick,
}: CategoriesProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex space-x-4 px-4 py-2 overflow-x-auto scrollbar-hide">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="flex flex-col items-center min-w-[60px] gap-2"
          >
            <SkeletonBox className="h-12 w-12 rounded-full" />
            <SkeletonBox className="h-3 w-12" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <section className="border-b border-gray-100 pb-2">
      <div className="flex space-x-4 overflow-x-auto px-4 pb-4 scrollbar-hide">
        {data.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onCategoryClick(cat.id)}
              className={`flex flex-col items-center min-w-[60px] gap-1 transition-all ${
                isActive ? "opacity-100" : "opacity-60 hover:opacity-100"
              }`}
            >
              <div className="relative h-12 w-12 flex items-center justify-center">
                {cat.id === "search" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className={`w-9 h-9 ${isActive ? "text-sky-500" : "text-gray-500"}`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                ) : (
                  <img
                    src={
                      isActive && cat.icon_active
                        ? cat.icon_active
                        : cat.icon_off || cat.icon_light
                    }
                    alt={cat.category}
                    className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-200"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      (
                        e.target as HTMLImageElement
                      ).nextElementSibling?.classList.remove("hidden");
                    }}
                  />
                )}

                <div
                  className={`hidden absolute inset-0 rounded-full border-2 ${
                    isActive ? "border-sky-500 bg-sky-50" : "border-gray-300"
                  } flex items-center justify-center bg-white`}
                >
                  <span
                    className={`text-base font-bold ${isActive ? "text-sky-500" : "text-gray-400"}`}
                  >
                    {cat.category.substring(0, 1)}
                  </span>
                </div>

                {cat.count > 0 && cat.id === "15665" && (
                  <span className="absolute -top-1 -right-2 bg-sky-400 text-white text-[10px] font-bold px-1.5 rounded-full shadow-sm">
                    {cat.count}
                  </span>
                )}
                {cat.category === "JACKPOT" && (
                  <span className="absolute -top-2 -right-2 text-red-500 text-sm animate-bounce">
                    🔥
                  </span>
                )}
              </div>

              <span
                className={`text-[11px] font-bold tracking-tight uppercase ${
                  isActive
                    ? "text-sky-500 border-b-2 border-sky-500 pb-0.5"
                    : "text-gray-400"
                }`}
              >
                {cat.category}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
};
