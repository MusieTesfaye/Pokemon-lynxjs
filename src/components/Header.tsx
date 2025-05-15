import logo from '../assets/logo.png';
import searchIcon from '../assets/srch.png';

const Header = () => {
  return (
    <view className="header">
      <view className="logo-container">
        <image src={logo} className="logo" />
      </view>
    </view>
  );
};

export default Header;
