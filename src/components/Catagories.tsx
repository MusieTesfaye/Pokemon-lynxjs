import { useNavigate } from "react-router";
import { usePokemonStatsByType } from "../hooks/usePokemon.ts";
import { TYPE_COLORS } from "../types/pokemon.ts";

const types = [
  { name: "normal" },
  { name: "fire" },
  { name: "water" },
  { name: "electric" },
  { name: "grass" },
  { name: "ice" },
  { name: "fighting" },
  { name: "poison" },
  { name: "ground" },
  { name: "flying" },
  { name: "psychic" },
  { name: "bug" },
  { name: "rock" },
  { name: "ghost" },
  { name: "dragon" },
  { name: "dark" },
  { name: "steel" },
  { name: "fairy" },
];

const Category = () => {
  const nav = useNavigate();

  const handleNavigate = (type: string) => {
    nav(`/pokemon-details?type=${type}`);
  };

  return (
    <view className="categories">
      <text className="categories-title">Categories</text>
      <view className="categories-grid">
        {types.map((typeObj) => {
          const { data: stats, isLoading } = usePokemonStatsByType(typeObj.name);
          const count = isLoading ? "..." : stats?.count ?? 0;
          const icon = `https://raw.githubusercontent.com/msikma/pokesprite/master/misc/types/gen8/${typeObj.name}.png`;

          return (
            <view
              key={typeObj.name}
              className="cat-card"
              style={{ backgroundColor: TYPE_COLORS[typeObj.name] }}
              bindtap={() => handleNavigate(typeObj.name)}
            >
              <image className="cat-icon" src={icon} />
              <text className="cat-name">
                {typeObj.name.charAt(0).toUpperCase() + typeObj.name.slice(1)}
              </text>
              <text className="cat-desc">{count} Pokémon</text>
            </view>
          );
        })}
      </view>
    </view>
  );
};

export default Category;