import axios from "axios";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import type { ListResponse, Category } from "../types";

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
}

const Query = new query();
export default Query;
