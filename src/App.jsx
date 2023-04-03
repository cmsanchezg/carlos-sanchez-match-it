import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.scss';

import HomePage from './pages/HomePage/HomePage';
import SelectMode from './pages/SelectMode/SelectMode';
import SinglePlayerPage from "./pages/SinglePlayerPage/SinglePlayerPage";
import TwoPlayerPage from "./pages/TwoPlayerPage/TwoPlayerPage";
import GamePage from "./pages/GamePage/GamePage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/selectmode" element={<SelectMode />} />
        <Route path="/singleplayermode" element={<SinglePlayerPage />} />
        <Route path="/twoplayermode" element={<TwoPlayerPage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;