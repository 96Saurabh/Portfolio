import { useContext } from "react";
import About from "./components/about/About";
import Skill from "./components/skill/skill";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductInfo from "./components/productInfo/productInfo";
import ProductPage from "./components/productItem/productItem";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <Skill />
      <ProductPage />
      <ProductInfo/>
      <Contact />
    </div>
  );
};

export default App;
