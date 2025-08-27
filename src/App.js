// import NavMenu from "./NavMenu";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Main from "./Main.js";
import Nav from "./Nav";
import OurTeam from "./OurTeam.js";

function App() {
  return (
    <div className="app">
      <Router>
        {/* <header className="header"> */}
        <Nav />
        {/* </header> */}
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Routes>
          <Route path="/team" element={<OurTeam />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
