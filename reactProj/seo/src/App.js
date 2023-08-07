import "./App.css";

import { BrowserRouter } from "react-router-dom";
import NavRoute from "./Routes/NavRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
