import "./App.css";
import Nav from "./UI/Nav";
import { BrowserRouter } from "react-router-dom";
import NavRoute from "./Routes/NavRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <NavRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
