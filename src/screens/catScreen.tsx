import BackButton from "../components/BackButton.tsx";
import { PokemonList } from "../components/PokemonList.tsx";
import { useLocation } from "react-router";

const catScreen = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const type = params.get("type") || "fire";

  return (
    <view className="container body">
      <BackButton />
      <text className="screen-title">
        {type.charAt(0).toUpperCase() + type.slice(1)} Pokémon
      </text>
      <scroll-view className="scroll-container" scroll-orientation="vertical">
        <view className="scroll-content">
          <PokemonList type={type} />
        </view>
      </scroll-view>
    </view>
  );
};

export default catScreen;
