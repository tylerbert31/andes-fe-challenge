export interface Category {
  id: string;
  category: string;
  icon_active?: string;
  icon_off?: string;
  icon_light?: string;
  providers?: Record<string, number>;
  count: number;
}

export interface Game {
  sequence: number;
  name: string;
  id: string;
  imgURL: string;
  platform: string;
  category: string[];
  platformIconDark?: string;
  platformIconLight?: string;
  isHot: boolean;
  jackpot?: string;
}

export type ProvidersData = Record<string, number>;
