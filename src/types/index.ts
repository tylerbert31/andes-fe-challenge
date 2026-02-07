export interface Article {
  id: string;
  author: string;
  title: string;
  sub_title: string | null;
  slug: string;
  image_alt: string;
  image: string;
  thumbnail: string | null;
  thumbnail2: string | null;
  content: string;
  meta_title: string;
  meta_url: string;
  meta_description: string;
  meta_keywords: string;
  categories: Array<{
    id: string;
    name: string;
    es_name: string | null;
    slug: string;
    parent_id: string;
    status: string;
    created_at: string;
  }>;
  tags: string;
  header_tags: string;
  schema_script: string | null;
  schema_faq: string | null;
  canonical: string | null;
  status: string;
  updated_by: string;
  date_published: string;
  updated_at: string;
  created_at: string;
}

export interface Category {
  id: string;
  category: string;
  image_active?: string;
  image_light?: string;
  image_off?: string;
  icon_active?: string;
  icon_off?: string;
  icon_light?: string;
  providers: Record<string, number>;
  count: number;
  article: string | Article | null | any;
}

export interface Provider {
  iconDark: string;
  iconLight: string;
  count: number;
  article: any | null;
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

export interface ListResponse {
  categories: Record<string, Category>;
  providers: Record<string, Provider>;
}
