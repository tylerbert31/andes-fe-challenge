import { useState } from "react";
import "./App.css";

// Components
import { Header } from "./components/Header";
import { GameProviders } from "./components/GameProviders";
import { Categories } from "./components/Categories";
import { SearchBar } from "./components/SearchBar";
import { GameGrid } from "./components/GameGrid";

// Data & Types
import { GAMES_DATA } from "./data/mockData";
import Query from "./lib/query";

function App() {
  const [activeCategory, setActiveCategory] = useState<string>("15665");
  const [provider, setProvider] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { data: listData } = Query.getList();

  const handleCategoryClick = (id: string) => {
    setActiveCategory(id);
    if (id !== "search") {
      setSearchQuery("");
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 pb-20">
      <Header />

      <main className="space-y-6 pt-4">
        <GameProviders data={listData?.providers || {}} />

        <Categories
          activeCategory={activeCategory}
          onCategoryClick={handleCategoryClick}
        />

        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          visible={activeCategory === "search"}
        />

        <GameGrid games={GAMES_DATA} />
      </main>
    </div>
  );
}

export default App;
