import "./css/styles.css";
import { Fade } from "react-awesome-reveal";
import Introduction from "./components/introduction/Introduction";
import SkillsComponent from "./components/skills/SkillsComponent";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import PortfolioComponent from "./components/portfolio/PortfolioComponent";
import Profile from "./components/profile/Profile";
import Transition from "./components/common/Transition";

function App() {
  return (
    <div className="App">

        <Fade>
          <Introduction />
          <Profile />
          <Transition nb={"first"}/>
          <SkillsComponent />
          <Transition nb={"second"}/>
          <Contact />
          <Footer />
        </Fade>

    </div>
  );
}

export default App;
