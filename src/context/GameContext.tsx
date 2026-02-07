import { createContext, useContext, useState, type ReactNode } from "react";

interface GameContextType {
  provider: string;
  setProvider: (provider: string) => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [provider, setProvider] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string>("15665");

  return (
    <GameContext.Provider
      value={{ provider, setProvider, activeCategory, setActiveCategory }}
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
