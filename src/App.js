// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import { NavBar } from "./components/Navbar.js";
import { NavBar, Banner, Skill, Project } from "./components";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skill />
      <Project />
    </div>
  );
}

export default App;
