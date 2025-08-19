import NavMenu from "./NavMenu";
import Main from "./Main";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <NavMenu />
      </header>
      <Main />
    </div>
  );
}

export default App;
