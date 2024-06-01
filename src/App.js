import "./css/styles.css";
import { Fade } from "react-awesome-reveal";
import Introduction from "./components/introduction/Introduction";

import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import PortfolioComponent from "./components/portfolio/PortfolioComponent";

import Transition from "./components/common/Transition";
import Solution from "./components/solution/Solution";
//import Offer from "./components/offer/Offer";
import SkillsComponent from "./components/skills/SkillsComponent";

function App() {
  return (
    <div className="App">
      <Fade>
        <Introduction />
        <Solution />
        <Transition nb={"first"} />
        {/**<Offer/>
        <Transition nb={"second"} />*/}
        <SkillsComponent />
        <Transition nb={"second"} />
        <PortfolioComponent />
        <Transition nb={"third"} />
        <Contact />
        <Footer />
      </Fade>
    </div>
  );
}

export default App;
