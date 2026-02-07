import { useState } from "react";
import "./App.css";

// Components
import { Header } from "./components/Header";
import { GameProviders, GameProvidersLoader } from "./components/GameProviders";
import { Categories } from "./components/Categories";
import { SearchBar } from "./components/SearchBar";
import { GameGrid, GamesGridLoader } from "./components/GameGrid";

// Data & Types
import Query from "./lib/query";

import { GameProvider, useGame } from "./context/GameContext";

function AppContent() {
  const { activeCategory, setActiveCategory, provider, setProvider } =
    useGame();
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Get Categories and Providers
  const { data: listData, isLoading: isLoadingList } = Query.getList();
  const {
    data: gamesInfiniteData,
    isLoading: isLoadingGames,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = Query.getGames({
    category: activeCategory,
    provider,
  });

  const gamesData = gamesInfiniteData?.pages.flat() || [];

  const handleCategoryClick = (id: string) => {
    setActiveCategory(id);
    setProvider(""); // Reset provider when changing category
    if (id !== "search") {
      setSearchQuery("");
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 pb-20">
      <Header />

      <main className="space-y-6 pt-4">
        {isLoadingList ? (
          <GameProvidersLoader />
        ) : (
          <GameProviders data={listData?.providers || {}} />
        )}

        <Categories
          activeCategory={activeCategory}
          onCategoryClick={handleCategoryClick}
        />

        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          visible={activeCategory === "search"}
        />

        {isLoadingGames ? (
          <GamesGridLoader />
        ) : (
          <GameGrid
            games={gamesData}
            onLoadMore={() => fetchNextPage()}
            hasNextPage={hasNextPage}
            isLoadingMore={isFetchingNextPage}
          />
        )}
      </main>
    </div>
  );
}

function App() {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
}

export default App;
