import { useQuery } from "@tanstack/react-query";
import { Food } from "./assets/food";

export function useFoods() {
    return useQuery({
        queryKey: ["foods"],
        queryFn: () =>
          fetch("http://localhost:3001/foods").then((res) => res.json() as Promise<Food[]>),
      })
}