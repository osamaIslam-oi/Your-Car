import "./App.css";
import React, {   useState } from "react";
import TopNav from "./components/Sections/1-section/Navbar";
import Home from "./components/Sections/1-section/Home";
import SecondContent from "./components/Sections/2-section/SecondContent";
import ThirdContent from "./components/Sections/3-section/ThirdContent";
import ForthContent from "./components/Sections/4-section/ForthContent";
import FifthContent from "./components/Sections/5-section/FifthContent";
import SixthContent from "./components/Sections/6-section/SixthContent";
import SeventhContent from "./components/Sections/7-section/SeventhContent";
import Footer from "./components/Sections/Footer/Footer";
import SideBar from "./components/SideBar/SideBar";
import Backdrop from "./components/SideBar/Backdrop";
import { CartProvider } from 'react-use-cart'

function App() {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState);
  };

  return (
    <CartProvider>
      <div id="home" className="background-img">
        <Home />
        <TopNav openSidebar={toggleSidebar} />
      </div>

      <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar} />
      <SideBar sidebar={sidebar} />

      <div id="about">
        <div className="grid">
          <SecondContent />
        </div>
      </div>
      <div id="service" className="section3">
        <div className="car2">
          <ThirdContent />
        </div>
      </div>
      <div id="car" className="section4">
        <ForthContent />
      </div>
      <div id="contact" className="section5">
        <FifthContent />
      </div>
      <div id="section6" className="section6">
        <SixthContent />
      </div>
      <div id="section7" className="section7">
        <SeventhContent />
      </div>
      <div id="Footer" className="Footer">
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
