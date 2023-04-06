import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.scss';

import HomePage from './pages/HomePage/HomePage';
import SelectMode from './pages/SelectMode/SelectMode';
// import TwoPlayerPage from "./pages/TwoPlayerPage/TwoPlayerPage";
import StartBtn from "./components/StartBtn/StartBtn";
import Gameboard from "./components/Gameboard/Gameboard";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/selectmode" element={<SelectMode />} />
        <Route path="/startbtn" element={<StartBtn />} />
        {/* <Route path="/twoplayermode" element={<TwoPlayerPage />} /> */}
        <Route path="/gameboard" element={<Gameboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;