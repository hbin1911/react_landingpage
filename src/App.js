import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./styles/App.scss"
import "./styles/Header.scss"

function App() {
  return (
    <BrowserRouter>

      <Header />
      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
