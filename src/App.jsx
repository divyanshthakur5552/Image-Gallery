import About from "./Components/About";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Saved from "./Components/Saved";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </BrowserRouter>
  );
}
