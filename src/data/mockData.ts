import type { Category, Game } from "../types";

export const CATEGORIES_DATA: Category[] = [
  {
    id: "search",
    category: "BUSCAR",
    providers: {},
    count: 0,
    article: null,
  },
  {
    id: "15665",
    category: "INICIO",
    icon_active:
      "https://f1m9.blob.core.windows.net/f1m9/icons/home_active.webp",
    icon_off: "https://f1m9.blob.core.windows.net/f1m9/icons/home_off.webp",
    icon_light: "https://f1m9.blob.core.windows.net/f1m9/icons/home_light.webp",
    providers: { Skywind: 248, PragmaticPlay: 666, PGSoft: 168 },
    count: 8926,
    article: "0",
  },
  {
    id: "15648",
    category: "POPULAR",
    icon_active:
      "https://f1m9.blob.core.windows.net/f1m9/icons/popular_active.webp",
    icon_off: "https://f1m9.blob.core.windows.net/f1m9/icons/popular_off.webp",
    icon_light:
      "https://f1m9.blob.core.windows.net/f1m9/icons/popular_light.webp",
    providers: { PragmaticPlay: 19, JiLi: 3, Skywind: 9 },
    count: 41,
    article: "0",
  },
  {
    id: "15647",
    category: "JACKPOT",
    icon_active:
      "https://f1m9.blob.core.windows.net/f1m9/icons/jackpot_active.webp",
    icon_off: "https://f1m9.blob.core.windows.net/f1m9/icons/jackpot_off.webp",
    icon_light:
      "https://f1m9.blob.core.windows.net/f1m9/icons/jackpot_light.webp",
    providers: {},
    count: 7433,
    article: "0",
  },
  {
    id: "15649",
    category: "NUEVO",
    icon_active:
      "https://f1m9.blob.core.windows.net/f1m9/icons/new_active.webp",
    icon_off: "https://f1m9.blob.core.windows.net/f1m9/icons/new_off.webp",
    icon_light: "https://f1m9.blob.core.windows.net/f1m9/icons/new_light.webp",
    providers: {},
    count: 142,
    article: "0",
  },
  {
    id: "15650",
    category: "CASUAL",
    icon_active:
      "https://f1m9.blob.core.windows.net/f1m9/icons/casual_active.webp",
    icon_off: "https://f1m9.blob.core.windows.net/f1m9/icons/casual_off.webp",
    icon_light:
      "https://f1m9.blob.core.windows.net/f1m9/icons/casual_light.webp",
    providers: {},
    count: 55,
    article: "0",
  },
];

export const PROVIDERS_DATA: Record<string, any> = {
  BGaming: { count: 187, iconDark: "", iconLight: "", article: null },
  PragmaticPlay: { count: 591, iconDark: "", iconLight: "", article: null },
  Skywind: { count: 199, iconDark: "", iconLight: "", article: null },
  PGSoft: { count: 183, iconDark: "", iconLight: "", article: null },
  WazDan: { count: 268, iconDark: "", iconLight: "", article: null },
  Hacksaw: { count: 93, iconDark: "", iconLight: "", article: null },
  Zitro: { count: 60, iconDark: "", iconLight: "", article: null },
  JiLi: { count: 197, iconDark: "", iconLight: "", article: null },
  Playtech: { count: 373, iconDark: "", iconLight: "", article: null },
  Endorphina: { count: 170, iconDark: "", iconLight: "", article: null },
};

export const GAMES_DATA: Game[] = [
  {
    sequence: 3,
    name: "Piñata Smash™",
    id: "27252",
    imgURL: "https://f1m9.blob.core.windows.net/f1m9/games/SW/sw-psi-965.webp",
    platform: "Skywind",
    category: ["POPULAR", "JACKPOT", "HOME", "INICIO"],
    platformIconDark:
      "https://f1m9.blob.core.windows.net/f1m9/providers/dark/SW.webp",
    platformIconLight:
      "https://f1m9.blob.core.windows.net/f1m9/providers/light/SW.webp",
    isHot: true,
    jackpot: "$823,896",
  },
  {
    sequence: 5,
    name: "Gates of Olympus Xmas 1000",
    id: "35444",
    imgURL:
      "https://f1m9.blob.core.windows.net/f1m9/games/PP/pp_vs20olympxmas.webp",
    platform: "PragmaticPlay",
    category: ["SLOTS", "POPULAR", "HOME", "PRAGMATIC", "INICIO"],
    platformIconDark:
      "https://f1m9.blob.core.windows.net/f1m9/providers/dark/PP.webp",
    platformIconLight:
      "https://f1m9.blob.core.windows.net/f1m9/providers/light/PP.webp",
    isHot: true,
  },
  {
    sequence: 8,
    name: "Joker's Jewels",
    id: "35445",
    imgURL: "https://f1m9.blob.core.windows.net/f1m9/games/PP/pp_vs5joker.webp",
    platform: "PragmaticPlay",
    category: ["SLOTS", "POPULAR", "HOME", "INICIO"],
    platformIconDark:
      "https://f1m9.blob.core.windows.net/f1m9/providers/dark/PP.webp",
    platformIconLight:
      "https://f1m9.blob.core.windows.net/f1m9/providers/light/PP.webp",
    isHot: true,
  },
  {
    sequence: 12,
    name: "Fortune Mouse",
    id: "35446",
    imgURL: "https://f1m9.blob.core.windows.net/f1m9/games/PG/pg_126.webp",
    platform: "PGSoft",
    category: ["SLOTS", "POPULAR", "HOME", "INICIO", "CASUAL"],
    platformIconDark:
      "https://f1m9.blob.core.windows.net/f1m9/providers/dark/PG.webp",
    platformIconLight:
      "https://f1m9.blob.core.windows.net/f1m9/providers/light/PG.webp",
    isHot: true,
  },
  {
    sequence: 15,
    name: "Super Lion",
    id: "35447",
    imgURL: "https://f1m9.blob.core.windows.net/f1m9/games/SW/sw_suli.webp",
    platform: "Skywind",
    category: ["SLOTS", "JACKPOT", "HOME", "INICIO"],
    platformIconDark:
      "https://f1m9.blob.core.windows.net/f1m9/providers/dark/SW.webp",
    platformIconLight:
      "https://f1m9.blob.core.windows.net/f1m9/providers/light/SW.webp",
    isHot: true,
  },
  {
    sequence: 18,
    name: "Gold Party",
    id: "35448",
    imgURL:
      "https://f1m9.blob.core.windows.net/f1m9/games/PP/pp_vs25goldparty.webp",
    platform: "PragmaticPlay",
    category: ["SLOTS", "POPULAR", "HOME", "INICIO"],
    platformIconDark:
      "https://f1m9.blob.core.windows.net/f1m9/providers/dark/PP.webp",
    platformIconLight:
      "https://f1m9.blob.core.windows.net/f1m9/providers/light/PP.webp",
    isHot: true,
  },
  {
    sequence: 20,
    name: "Cosmic Cash",
    id: "35449",
    imgURL:
      "https://f1m9.blob.core.windows.net/f1m9/games/PP/pp_vs40cosmiccash.webp",
    platform: "PragmaticPlay",
    category: ["SLOTS", "HOME", "INICIO"],
    platformIconDark:
      "https://f1m9.blob.core.windows.net/f1m9/providers/dark/PP.webp",
    platformIconLight:
      "https://f1m9.blob.core.windows.net/f1m9/providers/light/PP.webp",
    isHot: true,
  },
  {
    sequence: 22,
    name: "Fortune Rabbit",
    id: "35450",
    imgURL: "https://f1m9.blob.core.windows.net/f1m9/games/PG/pg_154.webp",
    platform: "PGSoft",
    category: ["SLOTS", "HOME", "INICIO", "NUEVO"],
    platformIconDark:
      "https://f1m9.blob.core.windows.net/f1m9/providers/dark/PG.webp",
    platformIconLight:
      "https://f1m9.blob.core.windows.net/f1m9/providers/light/PG.webp",
    isHot: true,
  },
  {
    sequence: 25,
    name: "Fortune Dragon",
    id: "35451",
    imgURL: "https://f1m9.blob.core.windows.net/f1m9/games/PG/pg_169.webp",
    platform: "PGSoft",
    category: ["SLOTS", "HOME", "INICIO", "POPULAR"],
    platformIconDark:
      "https://f1m9.blob.core.windows.net/f1m9/providers/dark/PG.webp",
    platformIconLight:
      "https://f1m9.blob.core.windows.net/f1m9/providers/light/PG.webp",
    isHot: true,
  },
  {
    sequence: 28,
    name: "Sugar Rush",
    id: "35452",
    imgURL:
      "https://k1m9.blob.core.windows.net/k1m9/games/PP/pp_vs20sugarrush.webp",
    platform: "PragmaticPlay",
    category: ["SLOTS", "HOME", "INICIO", "POPULAR"],
    platformIconDark:
      "https://f1m9.blob.core.windows.net/f1m9/providers/dark/PP.webp",
    platformIconLight:
      "https://f1m9.blob.core.windows.net/f1m9/providers/light/PP.webp",
    isHot: false,
  },
  {
    sequence: 30,
    name: "Big Bass Splash",
    id: "35453",
    imgURL:
      "https://k1m9.blob.core.windows.net/k1m9/games/PP/pp_vs10bbsplash.webp",
    platform: "PragmaticPlay",
    category: ["SLOTS", "HOME", "INICIO", "POPULAR", "CASUAL"],
    platformIconDark:
      "https://f1m9.blob.core.windows.net/f1m9/providers/dark/PP.webp",
    platformIconLight:
      "https://f1m9.blob.core.windows.net/f1m9/providers/light/PP.webp",
    isHot: false,
  },
  {
    sequence: 32,
    name: "Starlight Princess",
    id: "35454",
    imgURL:
      "https://k1m9.blob.core.windows.net/k1m9/games/PP/pp_vs20starlight.webp",
    platform: "PragmaticPlay",
    category: ["SLOTS", "HOME", "INICIO", "JACKPOT"],
    platformIconDark:
      "https://f1m9.blob.core.windows.net/f1m9/providers/dark/PP.webp",
    platformIconLight:
      "https://f1m9.blob.core.windows.net/f1m9/providers/light/PP.webp",
    isHot: true,
  },
];

export const CATEGORY_MAP: Record<string, string> = {
  "15665": "INICIO",
  "15648": "POPULAR",
  "15647": "JACKPOT",
  "15649": "NUEVO",
  "15650": "CASUAL",
};
