import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { NavBar, Banner, Skill, Project, Contact, Footer } from "./components";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
