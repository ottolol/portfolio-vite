import "./App.css";
import { Footer } from "./layout/footer/Footer";
import { Header } from "./layout/header/Header";
import { AboutMe } from "./layout/sections/aboutMe/AboutMe";
import { Contacts } from "./layout/sections/contacts/Contacts";
import { Projects } from "./layout/sections/projects/Projects";
import { Skills } from "./layout/sections/skills/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Projects />
      <Skills />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
