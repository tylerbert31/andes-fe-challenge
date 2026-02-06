import { useState, useMemo } from "react";
import "./App.css";

// Components
import { Header } from "./components/Header";
import { GameProviders } from "./components/GameProviders";
import { Categories } from "./components/Categories";
import { SearchBar } from "./components/SearchBar";
import { GameGrid } from "./components/GameGrid";

// Data & Types
import {
  CATEGORIES_DATA,
  PROVIDERS_DATA,
  GAMES_DATA,
  CATEGORY_MAP,
} from "./data/mockData";

function App() {
  const [activeCategory, setActiveCategory] = useState("15665");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGames = useMemo(() => {
    let games = GAMES_DATA;

    if (activeCategory === "search") {
      if (searchQuery.trim() === "") return games;
      return games.filter((game) =>
        game.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    } else {
      const categoryName = CATEGORY_MAP[activeCategory];
      if (categoryName) {
        games = games.filter((game) => game.category.includes(categoryName));
      }
    }

    return games;
  }, [activeCategory, searchQuery]);

  const handleCategoryClick = (id: string) => {
    if (id === activeCategory && id === "search") return;
    setActiveCategory(id);
    if (id !== "search") {
      setSearchQuery("");
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 pb-20">
      <Header />

      <main className="space-y-6 pt-4">
        <GameProviders data={PROVIDERS_DATA} />

        <Categories
          data={CATEGORIES_DATA}
          activeCategory={activeCategory}
          onCategoryClick={handleCategoryClick}
        />

        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          visible={activeCategory === "search"}
        />

        <GameGrid games={filteredGames} />
      </main>
    </div>
  );
}

export default App;
