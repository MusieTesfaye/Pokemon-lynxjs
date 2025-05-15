import heroimage from '../assets/pikachu.png';

const Hero = () => {
  return (
    <view className="hero">
      <view className="hero-content">
        <text className="hero-title top-copy animate-slide-left">POKEMON</text>
        <text className="hero-title animate-pop-up">POKEMON</text>
        <text className="hero-title bottom-copy animate-slide-right">POKEMON</text>
        <image src={heroimage} className="hero-image animate-pop-up" />
      </view>
    </view>

  );
};

export default Hero;
