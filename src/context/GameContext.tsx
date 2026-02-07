import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import type { Game } from "../types";

interface GameContextType {
  provider: string;
  setProvider: (provider: string) => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  favorites: Map<string, Game>;
  toggleFavorite: (game: Game) => void;
  isFavorite: (id: string) => boolean;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [provider, setProvider] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string>("15665");
  const [favorites, setFavorites] = useState<Map<string, Game>>(new Map());

  // Load favorites from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        // Assuming stored as array of games
        const map = new Map<string, Game>();
        parsed.forEach((game: Game) => map.set(game.id, game));
        setFavorites(map);
      } catch (e) {
        console.error("Failed to parse favorites", e);
      }
    }
  }, []);

  // Save to localStorage whenever favorites change
  useEffect(() => {
    const gamesArr = Array.from(favorites.values());
    localStorage.setItem("favorites", JSON.stringify(gamesArr));
  }, [favorites]);

  const toggleFavorite = (game: Game) => {
    setFavorites((prev) => {
      const next = new Map(prev);
      if (next.has(game.id)) {
        next.delete(game.id);
      } else {
        next.set(game.id, game);
      }
      return next;
    });
  };

  const isFavorite = (id: string) => favorites.has(id);

  return (
    <GameContext.Provider
      value={{
        provider,
        setProvider,
        activeCategory,
        setActiveCategory,
        favorites,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};
