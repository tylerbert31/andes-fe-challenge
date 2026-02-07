# 🎰 FUN88 Clone - Andes Technical Exam

A high-performance React application developed for the **Andes Technical Exam**. This project is an unofficial clone of the FUN88 mobile casino interface, built with a focus on code quality, performance, and modern React patterns.

**👤 Developed by:** Tyler Bert Baring (2026)  
**🔗 GitHub:** [tylerbert31](https://github.com/tylerbert31)  
**📂 Repository:** [andes-fe-challenge](https://github.com/tylerbert31/andes-fe-challenge)

---

## 🛠️ Tech Stack

- **⚛️ Core:** React 18 + TypeScript
- **🎨 Styling:** Tailwind CSS (Vanilla CSS for custom components)
- **📡 Data Fetching:** TanStack Query (React Query)
- **🛣️ Routing:** React Router DOM
- **🎠 UI Components:** Swiper.js (for high-performance Carousels)
- **⚡ Build Tool:** Vite

---

## ✨ Features & Implementation Details

### 1. 📡 Advanced API Handling

- **TanStack Query Integration:** Leverages `useQuery` and `useInfiniteQuery` for optimized data fetching, caching, and background synchronization.
- **🔄 Infinite Scrolling:** Implemented "See More" functionality using `useInfiniteQuery` to seamlessly append games to the grid as users scroll.
- **⌛ Loading States:** Custom skeleton loaders for every section (Game Providers, Categories, and Game Grids) to provide a smooth UX during data fetching.

### 2. 🔍 Game Filtering & Search

- **⚡ Client-Side Search:** The search feature is implemented using an efficient JavaScript `.filter()` on the game names, providing instantaneous feedback without redundant API calls.
- **🏷️ Category & Provider Filtering:** Global state management via **React Context API** allows users to filter games by category and provider simultaneously.

### 3. ⭐ Favorites System

- **💾 Persistence:** Uses `localStorage` to persist user favorites across browser sessions.
- **🚀 Performance:** Optimized using a `Map<gameId, Game>` data structure for O(1) lookups when checking "isFavorite" status on game cards.
- **❤️ Dedicated View:** A custom `/favorites` route to view and manage all saved games.

### 4. 📱 Premium UI/UX

- **🎮 High-Performance Carousel:** Game providers are displayed in a native-feeling, swipeable carousel with autoplay and custom navigation.
- **📱 Responsive Design:** Mobile-first approach, mimicking the fun88.mx mobile experience with smooth transitions and hover effects.
- **💎 Modern Aesthetics:** Curated HSL color palettes, glassmorphism effects, and micro-animations.

---

## 📂 Folder Structure

```text
src/
├── components/     # Reusable UI components (Header, Footer, GameGrid, etc.)
├── context/        # Global state management (GameContext)
├── data/           # Mock data and static assets
├── lib/            # API client and query logic (Axios + TanStack Query)
├── types/          # TypeScript interfaces and types
├── App.tsx         # Main entry point and routing configuration
└── FavoritesPage.tsx # Dedicated favorites view
```

---

## ⚙️ Installation & Running

1. **Clone the repository:**

   ```bash
   git clone https://github.com/tylerbert31/andes-fe-challenge.git
   ```

2. **Environment Setup:**
   Create a `.env` file in the root directory and add your backend URL:

   ```env
   VITE_BE_ROOT_URL=your_backend_api_root_url
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

---

## ✅ Compliance with Exam Requirements

- [x] **📡 API Handling:** Demonstrated via TanStack Query and Axios integration.
- [x] **⌛ UI States:** Skeleton loaders and empty states implemented for all modules.
- [x] **🔍 Search:** High-performance JS filter integrated into the search bar.
- [x] **🎠 Carousels:** Swiper.js integrated for a smooth swipe experience.
- [x] **⭐ Favorites:** Persistent favorites system using localStorage and Context.
- [x] **⚛️ Understanding React:** Usage of hooks (useState, useEffect, useMemo, useContext) and proper component design.

---

_⚠️ This project is for technical evaluation purposes only._
