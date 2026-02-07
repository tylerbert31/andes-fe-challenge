import { useState } from "react";
import type { ListResponse } from "../types";
import { SkeletonBox } from "./Loader";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/free-mode";
// @ts-ignore
import "swiper/css/navigation";

import { useGame } from "../context/GameContext";
// 7df5e3b51ccbe0bd0cd0175363bd0bfb

interface GameProvidersProps {
  data: ListResponse["providers"];
}

export const GameProvidersLoader = () => {
  return (
    <section className="px-4 py-4 space-y-4">
      <SkeletonBox className="h-6 w-48" />
      <div className="flex gap-3 overflow-hidden">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <SkeletonBox key={i} className="h-16 min-w-[240px]" />
        ))}
      </div>
    </section>
  );
};

export const GameProviders = ({ data }: GameProvidersProps) => {
  const { provider: activeProvider, setProvider } = useGame();
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateNavigationState = (swiper: any) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  if (Object.keys(data).length === 0) {
    return null;
  }

  const providers = Object.entries(data);

  return (
    <section className="overflow-hidden py-2">
      <div className="flex items-center justify-between px-4 mb-3">
        <h2 className="text-gray-600 font-medium text-lg">Game Providers</h2>
        <div className="flex items-center gap-1">
          <div className="flex gap-1 ml-1">
            <button
              onClick={() => swiperInstance?.slidePrev()}
              disabled={isBeginning}
              className={`p-1 bg-gray-100 rounded hover:bg-gray-200 text-gray-400 transition-colors ${
                isBeginning ? "opacity-30 cursor-not-allowed" : "opacity-100"
              }`}
              aria-label="Previous provider"
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
              onClick={() => swiperInstance?.slideNext()}
              disabled={isEnd}
              className={`p-1 bg-gray-100 rounded hover:bg-gray-200 text-gray-400 transition-colors ${
                isEnd ? "opacity-30 cursor-not-allowed" : "opacity-100"
              }`}
              aria-label="Next provider"
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

      <div className="w-full px-4">
        <Swiper
          onSwiper={(swiper) => {
            setSwiperInstance(swiper);
            updateNavigationState(swiper);
          }}
          onSlideChange={updateNavigationState}
          onReachBeginning={() => setIsBeginning(true)}
          onReachEnd={() => setIsEnd(true)}
          onFromEdge={() => {
            setIsBeginning(false);
            setIsEnd(false);
          }}
          modules={[FreeMode, Navigation, Autoplay]}
          spaceBetween={12}
          slidesPerView="auto"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          freeMode={{
            enabled: true,
            sticky: true,
            momentum: true,
            momentumRatio: 0.5,
            momentumVelocityRatio: 0.5,
          }}
          grabCursor={true}
          resistance={true}
          resistanceRatio={0.85}
          className="w-full overflow-visible!"
        >
          {providers.map(([name, provider], index) => {
            const isActive = activeProvider === name;
            return (
              <SwiperSlide
                key={`${name}-${index}`}
                className="w-auto!"
                onClick={() => setProvider(isActive ? "" : name)}
              >
                <div
                  className={`shrink-0 w-[120px] md:w-[240px] rounded-lg p-3 flex items-center justify-between border transition-all duration-300 group cursor-pointer active:scale-[0.98] ${
                    isActive
                      ? "bg-sky-50 border-sky-400 shadow-sm"
                      : "bg-gray-50 border-gray-100 hover:shadow-md hover:border-sky-200"
                  }`}
                >
                  <div className="flex flex-col">
                    <span
                      className={`font-bold text-sm truncate max-w-[120px] uppercase transition-colors ${
                        isActive
                          ? "text-sky-600"
                          : "text-gray-800 group-hover:text-sky-600"
                      }`}
                    >
                      {name}
                    </span>
                    <span
                      className={`text-xs ${isActive ? "text-sky-400" : "text-gray-400"}`}
                    >
                      ({provider.count})
                    </span>
                  </div>

                  <div className="w-10 h-8 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    {provider.iconLight ? (
                      <img
                        src={provider.iconLight}
                        alt={name}
                        className={`max-h-full max-w-full object-contain transition-opacity ${
                          isActive
                            ? "opacity-100"
                            : "opacity-80 group-hover:opacity-100"
                        }`}
                      />
                    ) : (
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-white uppercase shadow-sm transition-shadow ${
                          isActive ? "shadow-md" : "group-hover:shadow-md"
                        }`}
                        style={{
                          backgroundColor: `hsl(${(index * 40) % 360}, 70%, 60%)`,
                        }}
                      >
                        {name.substring(0, 2)}
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
