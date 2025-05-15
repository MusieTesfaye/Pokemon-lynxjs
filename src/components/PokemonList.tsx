import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { usePokemonListByType } from "../hooks/usePokemon.ts";
import type { Pokemon } from "../types/pokemon.ts";
import { TYPE_COLORS } from "../types/pokemon.ts";

export const PokemonList = ({ type }: { type: string }) => {
  const [page, setPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const { data: allPokemon, isLoading, isError } = usePokemonListByType(type);
  const navigate = useNavigate();

  const filteredPokemon = allPokemon?.filter(pokemon => 
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  const itemsPerPage = 40;
  const totalPages = Math.ceil(filteredPokemon.length / itemsPerPage);
  const startIdx = page * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const pokemonList = filteredPokemon.slice(startIdx, endIdx);

  useEffect(() => {
    setPage(0);
  }, [searchQuery]);

  const goNext = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const goPrev = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleSearchChange = (e: CustomEvent) => {
    setSearchQuery(e.detail.value);
  };

  const handleCardClick = (id: number) => {
    navigate(`/details?id=${id}`);
  };

  if (isLoading) {
    return <text className="loading">Loading Pokémon...</text>;
  }

  if (isError || !allPokemon) {
    return <text className="error">Failed to load Pokémon.</text>;
  }

  return (
    <view className="pokemon-list-container">
      <view className="input-container">
        <input
          placeholder="Search Pokémon..."
          className="input"
          bindinput={handleSearchChange}
          value={searchQuery}
        />
        <view className="search-button">
          <image 
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" 
            className="search-icon" 
          />
        </view>
      </view>

      {filteredPokemon.length > itemsPerPage && (
        <view className="pagination">
          <text 
            className={`pagination-button ${page === 0 ? 'disabled' : ''}`}
            bindtap={goPrev}
          >
            Previous
          </text>
          <text className="page-info">
            {filteredPokemon.length} Pokémon (Page {page + 1}/{totalPages})
          </text>
          <text 
            className={`pagination-button ${page >= totalPages - 1 ? 'disabled' : ''}`}
            bindtap={goNext}
          >
            Next
          </text>
        </view>
      )}

      {pokemonList.length > 0 ? (
        <view className="pokemon-grid">
          {pokemonList.map((pokemon) => (
            <view 
              key={pokemon.id} 
              className="pokemon-card"
              bindtap={() => handleCardClick(pokemon.id)}
            >
              <image
                className="pokemon-img"
                src={pokemon.sprites.front_default}
              />
              <text className="pokemon-name">
                #{pokemon.id} {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
              </text>
              <view className="type-container">
                {pokemon.types.map((typeInfo, index) => (
                  <text 
                    key={index} 
                    className="pokemon-type"
                    style={{ backgroundColor: TYPE_COLORS[typeInfo.type.name] }}
                  >
                    {typeInfo.type.name}
                  </text>
                ))}
              </view>
            </view>
          ))}
        </view>
      ) : (
        <text className="no-results">No Pokémon found matching "{searchQuery}"</text>
      )}
    </view>
  );
};
