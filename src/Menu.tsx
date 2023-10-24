import { foodTags } from "./assets/food";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export default function Menu() {
  //use router for search params
  const [searchParams, setSearchParams] = useSearchParams();
  const tag = searchParams.get("tag") ?? "All";

  const { data: foods = [] } = useFoods();

  const matchingFoods =
    tag === "All" 
      ? foods 
      : foods.filter((food) => food.tags.includes(tag));

  return (
    <>
      <h1>Menu</h1>

      <label className="block" htmlFor="tag">
        Filter by Tag
      </label>
      <select
        id="tag"
        value={tag}
        onChange={(e) => 
            setSearchParams((params) => ({ ...params, tag: e.target.value }))}
      >
        <option>All</option>
        {foodTags.map((tag) => (
          <option key={tag}>{tag}</option>
        ))}
      </select>

      <div className="flex flex-wrap">
        {matchingFoods.map((food) => (
          <div
            className="bg-slate-200 shadow-lg m-2 w-96 border p-2 rounded"
            key={food.id}
          >
            <h2>{food.name}</h2>
            <p className="font-bold">${food.price}</p>
            <p>{food.description}</p>
            <img
              className="h-48 w-full object-cover"
              src={"images/" + food.image}
              alt={food.name}
            />
          </div>
        ))}
      </div>
    </>
  );
}

