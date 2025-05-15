import type { Pokemon, PokemonListResponse } from "../types/pokemon.ts";

const API_URL = "https://pokeapi.co/api/v2";

export const fetchPokemonByType = async (type: string): Promise<Pokemon[]> => {
  const res = await fetch(`${API_URL}/type/${type}`);
  const data = await res.json();

  const detailed = await Promise.all(
    data.pokemon.map((entry: { pokemon: { name: string } }) =>
      fetchPokemonDetails(entry.pokemon.name)
    )
  );

  return detailed;
};

export const fetchPokemonDetails = async (name: string): Promise<Pokemon> => {
  const res = await fetch(`${API_URL}/pokemon/${name}`);
  return res.json();
};