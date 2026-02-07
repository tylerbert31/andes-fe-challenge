import axios from "axios";
import {
  useQuery,
  useInfiniteQuery,
  type UseQueryResult,
} from "@tanstack/react-query";
import type { ListResponse, Category, Game } from "../types";

class query {
  private get = axios.get;
  private rootUrl: string = "";

  constructor() {
    this.rootUrl = import.meta.env.VITE_BE_ROOT_URL!;
  }

  public getList(): UseQueryResult<ListResponse> {
    return useQuery({
      queryKey: ["list"],
      queryFn: async () => {
        const res = await this.get(
          `${this.rootUrl}/mexicopwa/games/lists.php?account=&display_platform=0`,
        );
        return res.data as ListResponse;
      },
    });
  }

  public getCategories(): UseQueryResult<Category[]> {
    return useQuery({
      queryKey: ["categories"],
      queryFn: async () => {
        const res = await this.get(
          `${this.rootUrl}/mexicopwa/games/categories.php?account=&display_platform=0`,
        );
        return res.data as Category[];
      },
    });
  }

  public getGames({
    category = "",
    provider = "",
  }: {
    category?: string;
    provider?: string;
  }) {
    return useInfiniteQuery<Game[]>({
      queryKey: ["games", category, provider],
      queryFn: async ({ pageParam = 1 }) => {
        const res = await this.get(
          `${this.rootUrl}/mexicopwa/data/games_v2.php?category=${category}&provider=${provider}&account=&page=${pageParam}&display_platform=0`,
        );
        return res.data as Game[];
      },
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.length >= 45) {
          return allPages.length + 1;
        }
        return undefined;
      },
      initialPageParam: 1,
    });
  }
}

const Query = new query();
export default Query;
