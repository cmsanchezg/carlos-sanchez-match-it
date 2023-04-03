import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage/HomePage';
import SelectMode from './pages/SelectMode/SelectMode';


import './App.scss';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/selectmode" element={<SelectMode />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;