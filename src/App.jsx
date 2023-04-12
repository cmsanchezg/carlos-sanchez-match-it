import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.scss';

import HomePage from './pages/HomePage/HomePage';
import SelectMode from './pages/SelectMode/SelectMode';
import SinglePlayerStartBtn from "./components/SinglePlayerStartBtn/SinglePlayerStartBtn";
import TwoPlayerStartBtn from "./components/TwoPlayerStartBtn/TwoPlayerStartBtn";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/selectmode" element={<SelectMode />} />
        <Route path="/single_player_game" element={<SinglePlayerStartBtn />} />
        <Route path="/two_player_game" element={<TwoPlayerStartBtn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;