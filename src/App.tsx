import "./App.css";
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import searchIcon from './assets/srch.png';
import Catagory from "./components/Catagories.tsx";


export function App(){

  return (
    <view className="container">
      <Header />
      <Hero />
      <scroll-view
        scroll-orientation="vertical"
        style={{ width: "100%", height: "100%", paddingLeft: "5px", marginLeft: "5px" }}
      >
      <Catagory />
      </scroll-view>
      </view>
  )
}
