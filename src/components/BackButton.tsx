import backIcon from "../assets/back.png";
import { useNavigate } from "react-router";


const BackButton = () => {
  const nav = useNavigate();

  return (
    <view
      bindtap={() => nav(-1)}
      className="back-button"
    >
      <image src={backIcon} className="back-button-icon" />
    </view>
  );
};

export default BackButton;