import { useQuery } from "@tanstack/react-query";
import { fetchPokemonByType, fetchPokemonDetails } from "../api/pokemon.ts";
import type { Pokemon } from "../types/pokemon.ts";

// For getting the full list with actual count
export const usePokemonByType = (type: string) => {
  return useQuery<Pokemon[]>({
    queryKey: ['pokemon', type],
    queryFn: () => fetchPokemonByType(type),
  });
};

// For getting stats (count + sample) - used in Category component
export const usePokemonStatsByType = (type: string) => {
  return useQuery({
    queryKey: ["pokemon-stats", type],
    queryFn: async () => {
      const all = await fetchPokemonByType(type);
      const first = all[0];
      const sample = first ? await fetchPokemonDetails(first.name) : null;
      return {
        count: all.length,
        sample,
      };
    },
  });
};

// For use in List screen with limit (optional)
export const usePokemonListByType = (type: string) => {
  return useQuery<Pokemon[]>({
    queryKey: ["pokemon-list", type],
    queryFn: () => fetchPokemonByType(type),
  });
};