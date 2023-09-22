import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./styles/App.scss"
import "./styles/Header.scss"
import "./styles/home.scss"
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>

      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
