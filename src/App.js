import LabelBottomNavigation from "./Pages/BottomNavigation/LabelBottomNavigation";
import HomePage from "./Pages/HomePage/HomePage";
import TechStack from "./Pages/TechStackPage/TechStackPage";
import Logo from "./Images/Logo.png";
import "./App.css";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Footer from "./Pages/ContactMe/Footer";
import { useState } from "react";
function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
      <LabelBottomNavigation />
      <HomePage />
      <AboutMe />
      <TechStack />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
