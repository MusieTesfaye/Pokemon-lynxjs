import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { fetchPokemonDetails } from "../api/pokemon.ts";
import { TYPE_COLORS } from "../types/pokemon.ts";
import type { Pokemon } from "../types/pokemon.ts";
import BackButton from "../components/BackButton.tsx";

const MAX_STATS = {
  hp: 255,
  attack: 190,
  defense: 230,
  specialattack: 194,
  specialdefense: 230,
  speed: 200
} as const;

export const DetailsScreen = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get("id");

  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPokemon = async () => {
      try {
        setLoading(true);
        const data = await fetchPokemonDetails(id!);
        setPokemon(data);
      } catch (error) {
        console.error("Failed to load Pokémon:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPokemon();
  }, [id]);

  const allSprites = pokemon ? [
    pokemon.sprites.front_default,
    pokemon.sprites.back_default,
    pokemon.sprites.front_shiny,
    pokemon.sprites.back_shiny,
    pokemon.sprites.other?.['official-artwork']?.front_default,
    pokemon.sprites.other?.home?.front_default,
  ].filter(Boolean) : ["https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"];

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === allSprites.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? allSprites.length - 1 : prev - 1
    );
  };

  if (loading) {
    return <text className="loading">Loading Pokémon...</text>;
  }

  if (!pokemon) {
    return <text className="error">Pokémon not found</text>;
  }

  return (
    <view className="details-container">
      <BackButton />
      <view className="details-header">
        <text className="details-name">
          #{pokemon.id} {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </text>
      </view>

      <view className="image-container">
        {allSprites.length > 1 && (
          <>
            <view className="swipe-button left" bindtap={prevImage}>
              <text>❮</text>
            </view>
            <view className="swipe-button right" bindtap={nextImage}>
              <text>❯</text>
            </view>
          </>
        )}

        <image
          className="pokemon-image"
          src={allSprites[currentImageIndex]}
        />

        <view className="types-container">
          {pokemon.types.map((typeInfo, index) => (
            <view
              key={index}
              className="type-chip"
              style={{ backgroundColor: TYPE_COLORS[typeInfo.type.name] }}
            >
              <text className="type-text">{typeInfo.type.name}</text>
            </view>
          ))}
        </view>
      </view>

      <view className="abilities-section">
        <text className="section-title">Abilities</text>
        <view className="abilities-container">
          {pokemon.abilities.map((ability, index) => (
            <view key={index} className="ability-chip">
              <text className="ability-text">
                {ability.ability.name.replace("-", " ")}
              </text>
            </view>
          ))}
        </view>
      </view>

      <view className="stats-section">
        <text className="section-title">Base Stats</text>
        {[
          { name: 'hp', value: pokemon.stats[0].base_stat },
          { name: 'attack', value: pokemon.stats[1].base_stat },
          { name: 'defense', value: pokemon.stats[2].base_stat },
          { name: 'special-attack', value: pokemon.stats[3].base_stat },
          { name: 'special-defense', value: pokemon.stats[4].base_stat },
          { name: 'speed', value: pokemon.stats[5].base_stat }
        ].map((stat) => {
          const statKey = stat.name.replace('-', '') as keyof typeof MAX_STATS;
          const percentage = Math.min(100, (stat.value / MAX_STATS[statKey]) * 100);
          
          return (
            <view key={stat.name} className="stat-row">
              <text className="stat-name">{stat.name.replace('-', ' ')}</text>
              <view className="stat-bar-track">
                <view 
                  className={`stat-bar stat-${stat.name.replace(' ', '-')}`}
                  style={{ width: `${percentage}%` }}
                />
              </view>
            </view>
          );
        })}
      </view>
    </view>
  );
};