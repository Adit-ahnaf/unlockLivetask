import { useState } from "react";
import CoffeeMenu from "./component/CoffeeMenu";
import Footer from "./component/Footer";
import Header from "./component/Header";
import HomeHero from "./component/HomeHero";
import ShowCase from "./component/ShowCase";
import SideBar from "./component/SideBar";
import TasteNewRecipe from "./component/TasteNewRecipe";
import Video from "./component/Video";
import WhyChooseUs from "./component/WhyChooseUs";

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const handleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  return (
    <>
      <div className="relative">
        <SideBar openSidebar={openSidebar} />
        <Header handleSidebar={handleSidebar} />
        <HomeHero />
        <Video />
        <WhyChooseUs />
        <CoffeeMenu />
        <TasteNewRecipe />
        <ShowCase />
        <Footer />
      </div>
    </>
  );
}

export default App;
